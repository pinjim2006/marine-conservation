const hero = document.getElementById('sdgHero');
const canvas = document.getElementById('sdgHeroCanvas');

if (hero && canvas instanceof HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('Canvas 2D context not available');
	}

	const pointer = {
		x: 0,
		y: 0,
		active: false,
		radius: 230,
		force: 0.34,
	};

	let dpr = window.devicePixelRatio || 1;
	let width = 0;
	let height = 0;
	let rafId = 0;
	let meshPhase = 0;
	let spotlightX = 0;
	let spotlightY = 0;

	/** @type {Array<{x:number,y:number,vx:number,vy:number,r:number,alpha:number,kind:'bubble'|'diamond'}>} */
	let particles = [];

	const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

	const createParticle = () => {
		const bubbleChance = Math.random() < 0.82;
		const speed = 0.01 + Math.random() * 0.05;
		const angle = Math.random() * Math.PI * 2;

		return {
			x: Math.random() * width,
			y: Math.random() * height,
			vx: Math.cos(angle) * speed,
			vy: Math.sin(angle) * speed,
			r: bubbleChance ? 1.8 + Math.random() * 7.5 : 2.6 + Math.random() * 4.2,
			alpha: bubbleChance ? 0.16 + Math.random() * 0.36 : 0.12 + Math.random() * 0.22,
			kind: bubbleChance ? 'bubble' : 'diamond',
		};
	};

	const resetParticles = () => {
		const area = width * height;
		const count = clamp(Math.round(area / 22000), 24, 78);
		particles = Array.from({ length: count }, createParticle);
	};

	const resizeCanvas = () => {
		dpr = window.devicePixelRatio || 1;
		const rect = hero.getBoundingClientRect();
		width = Math.max(1, Math.floor(rect.width));
		height = Math.max(1, Math.floor(rect.height));
		canvas.width = Math.floor(width * dpr);
		canvas.height = Math.floor(height * dpr);
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		resetParticles();
	};

	const drawMesh = () => {
		ctx.save();
		ctx.strokeStyle = 'rgba(165, 243, 252, 0.075)';
		ctx.lineWidth = 0.6;
		const step = 38;
		meshPhase += 0.0016;
		const shiftX = Math.sin(meshPhase) * 6;
		const shiftY = Math.cos(meshPhase * 0.9) * 5;

		for (let y = -step; y < height + step; y += step) {
			ctx.beginPath();
			ctx.moveTo(-step + shiftX, y + shiftY);
			ctx.lineTo(width + step + shiftX, y + shiftY);
			ctx.stroke();
		}

		for (let x = -step; x < width + step; x += step) {
			ctx.beginPath();
			ctx.moveTo(x + shiftX, -step + shiftY);
			ctx.lineTo(x + shiftX + width * 0.18, height + step + shiftY);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x + shiftX, -step + shiftY);
			ctx.lineTo(x + shiftX - width * 0.18, height + step + shiftY);
			ctx.stroke();
		}
		ctx.restore();
	};

	const drawBackground = () => {
		const deepGradient = ctx.createRadialGradient(width * 0.5, height * 0.45, 10, width * 0.5, height * 0.5, Math.max(width, height));
		deepGradient.addColorStop(0, '#0a4f8f');
		deepGradient.addColorStop(0.42, '#053d74');
		deepGradient.addColorStop(1, '#021125');
		ctx.fillStyle = deepGradient;
		ctx.fillRect(0, 0, width, height);

		const targetSpotX = pointer.active ? pointer.x : width * 0.5;
		const targetSpotY = pointer.active ? pointer.y : height * 0.45;
		spotlightX += (targetSpotX - spotlightX) * 0.01;
		spotlightY += (targetSpotY - spotlightY) * 0.01;

		const spotAlpha = pointer.active ? 0.36 : 0.24;
		const cursorGlow = ctx.createRadialGradient(spotlightX, spotlightY, 0, spotlightX, spotlightY, Math.max(width, height) * 0.42);
		cursorGlow.addColorStop(0, `rgba(186, 230, 253, ${spotAlpha})`);
		cursorGlow.addColorStop(0.35, `rgba(125, 211, 252, ${spotAlpha * 0.48})`);
		cursorGlow.addColorStop(1, 'rgba(125, 211, 252, 0)');
		ctx.fillStyle = cursorGlow;
		ctx.fillRect(0, 0, width, height);
	};

	const drawCaustics = (time) => {
		ctx.save();
		ctx.globalCompositeOperation = 'screen';
		ctx.globalAlpha = 0.22;

		for (let i = 0; i < 4; i++) {
			const waveX = width * (0.14 + i * 0.23) + Math.sin(time * 0.0006 + i * 1.4) * 24;
			const waveY = height * (0.2 + i * 0.18) + Math.cos(time * 0.0005 + i) * 26;
			const radius = Math.max(width, height) * (0.2 + i * 0.03);
			const light = ctx.createRadialGradient(waveX, waveY, 0, waveX, waveY, radius);
			light.addColorStop(0, 'rgba(186, 230, 253, 0.24)');
			light.addColorStop(1, 'rgba(186, 230, 253, 0)');
			ctx.fillStyle = light;
			ctx.fillRect(0, 0, width, height);
		}

		ctx.restore();
	};

	const drawParticle = (particle) => {
		ctx.save();
		ctx.globalAlpha = particle.alpha;

		if (particle.kind === 'bubble') {
			ctx.beginPath();
			ctx.fillStyle = 'rgba(240, 249, 255, 0.95)';
			ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
			ctx.fill();

			ctx.beginPath();
			ctx.fillStyle = 'rgba(255, 255, 255, 0.38)';
			ctx.arc(particle.x - particle.r * 0.3, particle.y - particle.r * 0.3, particle.r * 0.3, 0, Math.PI * 2);
			ctx.fill();
		} else {
			const size = particle.r;
			ctx.translate(particle.x, particle.y);
			ctx.rotate(Math.PI * 0.25);
			ctx.fillStyle = 'rgba(224, 242, 254, 0.8)';
			ctx.fillRect(-size * 0.45, -size * 0.45, size * 0.9, size * 0.9);
		}

		ctx.restore();
	};

	const updateParticle = (particle) => {
		if (pointer.active) {
			const dx = particle.x - pointer.x;
			const dy = particle.y - pointer.y;
			const dist = Math.hypot(dx, dy) || 0.0001;
			if (dist < pointer.radius) {
				const impact = (1 - dist / pointer.radius) * pointer.force;
				particle.vx += (dx / dist) * impact;
				particle.vy += (dy / dist) * impact;
			}
		}

		particle.vx += (Math.random() - 0.5) * 0.00055;
		particle.vy += (Math.random() - 0.5) * 0.00055;
		particle.vx *= 0.9;
		particle.vy *= 0.9;
		particle.vx = clamp(particle.vx, -0.28, 0.28);
		particle.vy = clamp(particle.vy, -0.28, 0.28);
		particle.x += particle.vx;
		particle.y += particle.vy;

		if (particle.x - particle.r <= 0) {
			particle.x = particle.r;
			particle.vx = Math.abs(particle.vx) * 0.9;
		}
		if (particle.x + particle.r >= width) {
			particle.x = width - particle.r;
			particle.vx = -Math.abs(particle.vx) * 0.9;
		}
		if (particle.y - particle.r <= 0) {
			particle.y = particle.r;
			particle.vy = Math.abs(particle.vy) * 0.9;
		}
		if (particle.y + particle.r >= height) {
			particle.y = height - particle.r;
			particle.vy = -Math.abs(particle.vy) * 0.9;
		}
	};

	const render = (time) => {
		ctx.clearRect(0, 0, width, height);
		drawBackground();
		drawMesh();
		drawCaustics(time);

		for (const particle of particles) {
			updateParticle(particle);
			drawParticle(particle);
		}

		rafId = window.requestAnimationFrame(render);
	};

	const handlePointerMove = (event) => {
		const rect = hero.getBoundingClientRect();
		pointer.x = event.clientX - rect.left;
		pointer.y = event.clientY - rect.top;
		pointer.active = true;
	};

	const handlePointerLeave = () => {
		pointer.active = false;
		pointer.x = width * 0.5;
		pointer.y = height * 0.45;
	};

	resizeCanvas();
	spotlightX = width * 0.5;
	spotlightY = height * 0.45;
	rafId = window.requestAnimationFrame(render);

	hero.addEventListener('pointermove', handlePointerMove);
	hero.addEventListener('pointerleave', handlePointerLeave);
	window.addEventListener('resize', resizeCanvas);

	const resizeObserver = new ResizeObserver(() => {
		resizeCanvas();
	});
	resizeObserver.observe(hero);

	window.addEventListener('pagehide', () => {
		window.cancelAnimationFrame(rafId);
		window.removeEventListener('resize', resizeCanvas);
		hero.removeEventListener('pointermove', handlePointerMove);
		hero.removeEventListener('pointerleave', handlePointerLeave);
		resizeObserver.disconnect();
	});
}
