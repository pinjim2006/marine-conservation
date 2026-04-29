import { gsap } from 'gsap';

window.addEventListener('load', () => {
	const hero = document.getElementById('hero');
	const heroBg = document.getElementById('hero-bg');
	const rainLayer = document.getElementById('hero-rain');
	const heroContent = document.getElementById('hero-content');

	if (!hero || !heroBg || !heroContent) return;

	const tl = gsap.timeline();

	if (rainLayer) {
		const dropCount = window.innerWidth < 768 ? 55 : 95;
		const fragment = document.createDocumentFragment();

		for (let i = 0; i < dropCount; i += 1) {
			const drop = document.createElement('span');
			drop.className = 'rain-drop';

			const left = 45 + Math.random() * 70;
			const duration = 0.65 + Math.random() * 0.95;
			const delay = Math.random() * -2.4;
			const length = 10 + Math.random() * 20;
			const width = 1 + Math.random() * 1.4;
			const opacity = 0.2 + Math.random() * 0.45;

			drop.style.left = `${left}%`;
			drop.style.height = `${length}px`;
			drop.style.width = `${width}px`;
			drop.style.opacity = `${opacity}`;
			drop.style.animationDuration = `${duration}s`;
			drop.style.animationDelay = `${delay}s`;

			fragment.appendChild(drop);
		}

		rainLayer.appendChild(fragment);
	}

	tl.to('#hero-title', { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' })
		.to('#hero-desc', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
		.to('#hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');

	window.addEventListener('mousemove', (e) => {
		const { clientX, clientY } = e;
		const xPos = clientX / window.innerWidth - 0.5;
		const yPos = clientY / window.innerHeight - 0.5;

		gsap.to('#hero-bg', {
			duration: 1.5,
			x: xPos * 30,
			y: yPos * 30,
			ease: 'power2.out',
			overwrite: 'auto'
		});

		gsap.to('#hero-content', {
			duration: 2,
			x: xPos * -15,
			y: yPos * -15,
			ease: 'power3.out',
			overwrite: 'auto'
		});
	});

	let ticking = false;

	const updateParallax = () => {
		const rect = hero.getBoundingClientRect();
		const visible = rect.bottom > 0 && rect.top < window.innerHeight;

		if (!visible) {
			ticking = false;
			return;
		}

		const offset = Math.max(0, window.scrollY);
		const bgY = Math.min(offset * 0.25, 200);
		const contentY = Math.max(offset * -0.35, -220);

		heroBg.style.transform = `translate3d(0, ${bgY}px, 0)`;
		heroContent.style.transform = `translate3d(0, ${contentY}px, 0)`;

		ticking = false;
	};

	const onScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(updateParallax);
			ticking = true;
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll);
	onScroll();
});
