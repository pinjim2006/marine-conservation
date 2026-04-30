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

	// 跟踪当前的滚动Y值
	let scrollYValue = 0;
	let scrollXValue = 0;
	let scrollContentYValue = 0;
	let scrollContentXValue = 0;

	window.addEventListener('mousemove', (e) => {
		const rect = hero.getBoundingClientRect();
		// 只在hero区域内应用鼠标效果
		if (rect.top >= window.innerHeight || rect.bottom <= 0) return;

		const { clientX } = e;
		const xPos = clientX / window.innerWidth - 0.5;

		// 只改变x值，让滚动完全控制y值
		gsap.to(heroBg, {
			duration: 1.5,
			x: xPos * 30,
			ease: 'power2.out',
			overwrite: false
		});

		gsap.to(heroContent, {
			duration: 2,
			x: xPos * -15,
			ease: 'power3.out',
			overwrite: false
		});
	});

	let ticking = false;

	const updateParallax = () => {
		const rect = hero.getBoundingClientRect();
		const scrollProgress = Math.max(0, -rect.top) / hero.clientHeight;

		// 只在hero区域可见时应用视差效果
		if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
			ticking = false;
			return;
		}

		// 基于hero区域的相对位置计算视差
		const bgY = scrollProgress * hero.clientHeight * 0.25;
		const contentY = scrollProgress * hero.clientHeight * -0.35;

		// 获取当前的x值（由鼠标事件设置）
		const bgX = gsap.getProperty(heroBg, 'x') || 0;
		const contentX = gsap.getProperty(heroContent, 'x') || 0;

		// 同时保留鼠标的x效果和滚动的y效果
		gsap.set(heroBg, {
			x: bgX,
			y: bgY
		});

		gsap.set(heroContent, {
			x: contentX,
			y: contentY
		});

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
