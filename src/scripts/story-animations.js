// ===== GSAP 動畫庫導入和配置 =====
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 註冊 ScrollTrigger 外掛以支援滾動觸發動畫
gsap.registerPlugin(ScrollTrigger);

// ===== 全域狀態管理 =====
let cleanupFns = [];    // 存儲清理函數
let localTriggers = []; // 存儲 ScrollTrigger 實例
let localTweens = [];   // 存儲 GSAP 動畫實例

// ===== 輔助工具函數 =====
const addCleanup = (fn) => cleanupFns.push(fn);

const trackTrigger = (trigger) => {
	if (trigger) localTriggers.push(trigger);
	return trigger;
};

const trackTween = (tween) => {
	if (tween) localTweens.push(tween);
	if (tween?.scrollTrigger) localTriggers.push(tween.scrollTrigger);
	return tween;
};

// ===== 文字分割函數 =====
const splitText = (element) => {
	if (!element || element.dataset.splitReady === 'true') return;
	const text = element.textContent?.trim();
	if (!text) return;

	const isCjk = /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/.test(text);
	const parts = isCjk ? Array.from(text) : text.split(' ');

	const fragment = document.createDocumentFragment();
	parts.forEach((part, index) => {
		const span = document.createElement('span');
		span.className = 'split-char';
		span.textContent = part + (!isCjk && index < parts.length - 1 ? ' ' : '');
		fragment.appendChild(span);
	});

	element.setAttribute('aria-label', text);
	element.textContent = '';
	element.appendChild(fragment);
	element.dataset.splitReady = 'true';
};

// ===== 段落分行函數 =====
const sentenceRegex = /[^。！？!?；;]+[。！？!?；;]?/g;

const splitParagraphIntoLines = (paragraph) => {
	if (!paragraph || paragraph.dataset.linesReady === 'true') return;

	const nodes = Array.from(paragraph.childNodes);
	if (!nodes.length) return;

	const createLine = () => {
		const span = document.createElement('span');
		span.className = 'story-line';
		return span;
	};

	let currentLine = createLine();
	const lines = [];
	const pushLine = () => {
		if (currentLine.textContent?.trim() || currentLine.querySelector('*')) {
			lines.push(currentLine);
			currentLine = createLine();
		}
	};

	nodes.forEach((node) => {
		if (node.nodeType === Node.TEXT_NODE) {
			const text = node.textContent || '';
			const parts = text.match(sentenceRegex) || [];
			parts.forEach((part) => {
				if (!part.trim()) return;
				currentLine.appendChild(document.createTextNode(part));
				if (/[。！？!?；;]$/.test(part.trim())) pushLine();
			});
			return;
		}
		if (node.nodeType === Node.ELEMENT_NODE) {
			currentLine.appendChild(node);
			const tailText = node.textContent || '';
			if (/[。！？!?；;]$/.test(tailText.trim())) pushLine();
		}
	});

	pushLine();
	paragraph.textContent = '';
	lines.forEach((line) => paragraph.appendChild(line));
	paragraph.dataset.linesReady = 'true';
};

// =====================================================
// ===== 場景動態背景生成器 =====
// =====================================================

/**
 * Scene 1: 光束 + 浮游生物
 * 在指定容器內生成光束條和微小漂浮粒子
 */
function createScene1Assets(container) {
	if (!container) return;

	// — 光束 (4 道) —
	for (let i = 0; i < 4; i++) {
		const beam = document.createElement('div');
		beam.className = 'scene-beam';
		beam.style.left = `${15 + i * 20}%`;
		beam.style.animationDelay = `${i * 0.7}s`;
		container.appendChild(beam);

		// 光束閃爍
		trackTween(gsap.to(beam, {
			opacity: gsap.utils.random(0.08, 0.25),
			duration: gsap.utils.random(2.5, 4.5),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: i * 0.6,
		}));
	}

	// — 浮游生物粒子 (35 個) —
	for (let i = 0; i < 35; i++) {
		const dot = document.createElement('div');
		dot.className = 'scene-plankton';
		dot.style.left = `${gsap.utils.random(2, 98)}%`;
		dot.style.top = `${gsap.utils.random(60, 110)}%`;
		const size = gsap.utils.random(2, 5);
		dot.style.width = `${size}px`;
		dot.style.height = `${size}px`;
		container.appendChild(dot);

		trackTween(gsap.to(dot, {
			y: '-100vh',
			x: gsap.utils.random(-40, 40),
			opacity: gsap.utils.random(0.15, 0.7),
			duration: gsap.utils.random(8, 18),
			repeat: -1,
			ease: 'none',
			delay: gsap.utils.random(0, 6),
		}));
	}
}

/**
 * Scene 2: 魚群剪影
 * 多條 SVG 魚從兩側快速游過
 */
function createScene2Assets(container) {
	if (!container) return;

	const fishSVG = (flip) => {
		const s = flip ? 'transform: scaleX(-1);' : '';
		return `<svg style="${s}" viewBox="0 0 64 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 16C4 16 16 4 36 4C48 4 56 10 60 16C56 22 48 28 36 28C16 28 4 16 4 16Z"/><path d="M0 16L10 8V24L0 16Z"/><circle cx="46" cy="14" r="2" fill="rgba(0,0,0,0.3)"/></svg>`;
	};

	for (let i = 0; i < 18; i++) {
		const fish = document.createElement('div');
		fish.className = 'scene-fish';
		const fromLeft = Math.random() > 0.5;
		const yPos = gsap.utils.random(5, 90);
		const fishSize = gsap.utils.random(28, 60);
		fish.style.top = `${yPos}%`;
		fish.style.width = `${fishSize}px`;
		fish.style.height = `${fishSize / 2}px`;
		fish.style.opacity = `${gsap.utils.random(0.15, 0.55)}`;
		fish.innerHTML = fishSVG(!fromLeft);

		if (fromLeft) {
			fish.style.left = '-80px';
		} else {
			fish.style.right = '-80px';
		}

		container.appendChild(fish);

		const xDist = fromLeft ? '110vw' : '-110vw';
		trackTween(gsap.to(fish, {
			x: xDist,
			duration: gsap.utils.random(4, 10),
			repeat: -1,
			ease: 'none',
			delay: gsap.utils.random(0, 6),
		}));
	}
}

/**
 * Scene 3: 垃圾沉降
 * 塑膠袋、寶特瓶等垃圾緩慢下沉，帶旋轉
 */
function createScene3Assets(container) {
	if (!container) return;

	const trashIcons = ['🛍️', '🥤', '🧴', '🗑️', '🥡', '🧃', '🪣', '📦'];

	for (let i = 0; i < 20; i++) {
		const item = document.createElement('div');
		item.className = 'scene-trash';
		item.textContent = trashIcons[i % trashIcons.length];
		item.style.left = `${gsap.utils.random(3, 97)}%`;
		item.style.top = `${gsap.utils.random(-30, -5)}%`;
		item.style.fontSize = `${gsap.utils.random(16, 34)}px`;
		item.style.opacity = `${gsap.utils.random(0.2, 0.55)}`;
		container.appendChild(item);

		trackTween(gsap.to(item, {
			y: '120vh',
			x: gsap.utils.random(-60, 60),
			rotation: gsap.utils.random(-180, 180),
			duration: gsap.utils.random(12, 24),
			repeat: -1,
			ease: 'sine.inOut',
			delay: gsap.utils.random(0, 8),
		}));
	}
}

/**
 * Scene 4: 微塑膠顆粒
 * 密集的小點做神經質的微小抖動
 */
function createScene4Assets(container) {
	if (!container) return;

	for (let i = 0; i < 80; i++) {
		const particle = document.createElement('div');
		particle.className = 'scene-microplastic';
		const size = gsap.utils.random(1.5, 4);
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.left = `${gsap.utils.random(1, 99)}%`;
		particle.style.top = `${gsap.utils.random(1, 99)}%`;
		particle.style.opacity = `${gsap.utils.random(0.15, 0.5)}`;
		// 隨機微塑膠顏色
		const colors = [
			'rgba(255,255,255,0.6)',
			'rgba(200,220,255,0.5)',
			'rgba(255,200,200,0.4)',
			'rgba(200,255,200,0.4)',
			'rgba(255,255,200,0.5)',
		];
		particle.style.background = colors[Math.floor(Math.random() * colors.length)];
		container.appendChild(particle);

		// 神經質的隨機抖動
		const jitterTl = gsap.timeline({ repeat: -1 });
		for (let j = 0; j < 6; j++) {
			jitterTl.to(particle, {
				x: gsap.utils.random(-8, 8),
				y: gsap.utils.random(-8, 8),
				duration: gsap.utils.random(0.3, 0.8),
				ease: 'power1.inOut',
			});
		}
		trackTween(jitterTl);
	}
}

/**
 * Scene 5: 孤單的小魚 + 頂部光束
 */
function createScene5Assets(container) {
	if (!container) return;

	// — 頂部光束 —
	const topLight = document.createElement('div');
	topLight.className = 'scene-top-light';
	container.appendChild(topLight);

	trackTween(gsap.to(topLight, {
		opacity: gsap.utils.random(0.3, 0.6),
		scaleX: gsap.utils.random(0.8, 1.2),
		duration: 3.5,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	}));

	// — 孤單的小魚 —
	const loneFish = document.createElement('div');
	loneFish.className = 'scene-lone-fish';
	loneFish.innerHTML = `<svg viewBox="0 0 64 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M4 16C4 16 16 4 36 4C48 4 56 10 60 16C56 22 48 28 36 28C16 28 4 16 4 16Z" fill="rgba(52,211,153,0.7)"/>
		<path d="M0 16L10 8V24L0 16Z" fill="rgba(52,211,153,0.5)"/>
		<circle cx="46" cy="14" r="2" fill="rgba(255,255,255,0.6)"/>
	</svg>`;
	container.appendChild(loneFish);

	// 小魚緩慢往上方光源游去
	trackTween(gsap.to(loneFish, {
		y: '-35vh',
		x: gsap.utils.random(-20, 20),
		rotation: gsap.utils.random(-5, 5),
		duration: 20,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	}));

	// 小魚微微搖擺
	trackTween(gsap.to(loneFish, {
		rotation: 8,
		duration: 2.5,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	}));
}

// =====================================================
// ===== 主動畫初始化函數 =====
// =====================================================

export function initStoryAnimations() {
	cleanupStoryAnimations();
	const root = document.querySelector('[data-story-root]');
	if (!root) return;

	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	// ===== DOM 元素選擇 =====
	const sections = Array.from(root.querySelectorAll('[data-story-section]'));
	const scene = root.querySelector('[data-scene-backdrop]');
	const progressBar = root.querySelector('[data-progress-bar]');
	const dots = root.querySelectorAll('[data-progress-dot]');
	const hero = root.querySelector('[data-story-hero]');

	// ===== 文字準備 =====
	root.querySelectorAll('[data-split]').forEach(splitText);

	const storyParagraphs = Array.from(root.querySelectorAll('.story-body p'));
	storyParagraphs.forEach(splitParagraphIntoLines);

	if (prefersReduced) {
		root.classList.add('story-reduced-motion');
		// 即使 reduced motion，也讓所有文字可見
		root.querySelectorAll('[data-reveal], .story-line, .split-char').forEach(el => {
			el.style.opacity = '1';
			el.style.transform = 'none';
		});
		return;
	}

	// =====================================================
	// ===== 生成各場景動態背景 =====
	// =====================================================
	const sceneContainers = root.querySelectorAll('[data-scene-assets]');
	sceneContainers.forEach((container) => {
		const sceneType = container.dataset.sceneAssets;
		switch (sceneType) {
			case 'beams': createScene1Assets(container); break;
			case 'fish': createScene2Assets(container); break;
			case 'trash': createScene3Assets(container); break;
			case 'microplastic': createScene4Assets(container); break;
			case 'hope': createScene5Assets(container); break;
		}
	});

	// =====================================================
	// ===== 英雄區段入場動畫 =====
	// =====================================================
	if (hero) {
		const heroTimeline = gsap.timeline();
		const heroItems = hero.querySelectorAll('.story-kicker, .story-hero__meta, .story-scroll-hint');
		const heroSplitChars = hero.querySelectorAll('[data-split] .split-char');
		gsap.set(heroItems, { opacity: 0, y: 26 });
		gsap.set(heroSplitChars, { opacity: 0, y: 18, rotateX: 55 });
		heroTimeline
			.to(heroSplitChars, {
				opacity: 1, y: 0, rotateX: 0,
				duration: 0.9, stagger: 0.02, ease: 'power3.out',
			})
			.to(heroItems, {
				opacity: 1, y: 0,
				duration: 1.1, stagger: 0.12, ease: 'power3.out',
			}, '-=0.4');
		trackTween(heroTimeline);
	}

	// =====================================================
	// ===== 各 Section 滾動動畫 =====
	// =====================================================
	sections.forEach((section, sectionIndex) => {
		const isLastScene = sectionIndex === sections.length - 1;
		const sectionHeader = section.querySelector('.story-section__header');
		const label = section.querySelector('.story-section__label');
		const heading = section.querySelector('h2');
		const quote = section.querySelector('.story-quote');
		const lines = Array.from(section.querySelectorAll('.story-body .story-line'));
		const revealItems = Array.from(section.querySelectorAll('[data-reveal]'));
		const allTextItems = [label, heading, quote, ...lines, ...revealItems].filter(Boolean);
		const assetsContainer = section.querySelector('[data-scene-assets]');

		// 設定初始狀態
		if (heading) gsap.set(heading, { opacity: 0, y: 30 });
		if (label) gsap.set(label, { opacity: 0, y: 20 });
		if (quote) gsap.set(quote, { opacity: 0, y: 30 });
		gsap.set(lines, { opacity: 0, y: 28 });
		gsap.set(revealItems, { opacity: 0, y: 28 });

		// 場景資源初始隱藏
		if (assetsContainer) {
			gsap.set(assetsContainer, { opacity: 0 });
		}

		// 文字出現速度：最後一幕特別慢
		const textDuration = isLastScene ? 2.0 : 0.8;
		const staggerDelay = isLastScene ? 0.25 : 0.1;

		// ===== ScrollTrigger: 背景顏色切換 =====
		trackTrigger(
			ScrollTrigger.create({
				trigger: section,
				start: 'top 70%',
				end: 'bottom 30%',
				onEnter: () => {
					trackTween(gsap.to(root, {
						'--scene-color': section.dataset.sceneColor || '#0b1d2c',
						'--scene-color-end': section.dataset.sceneEnd || '#05070d',
						'--scene-accent': section.dataset.sceneAccent || '#f8b84a',
						duration: 1.2,
						ease: 'power2.inOut',
					}));
					// 顯示場景資源
					if (assetsContainer) {
						gsap.to(assetsContainer, { opacity: 1, duration: 1.5, ease: 'power2.out' });
					}
				},
				onEnterBack: () => {
					trackTween(gsap.to(root, {
						'--scene-color': section.dataset.sceneColor || '#0b1d2c',
						'--scene-color-end': section.dataset.sceneEnd || '#05070d',
						'--scene-accent': section.dataset.sceneAccent || '#f8b84a',
						duration: 1.2,
						ease: 'power2.inOut',
					}));
					if (assetsContainer) {
						gsap.to(assetsContainer, { opacity: 1, duration: 1.5, ease: 'power2.out' });
					}
				},
				onLeave: () => {
					if (assetsContainer) {
						gsap.to(assetsContainer, { opacity: 0, duration: 0.8, ease: 'power2.in' });
					}
				},
				onLeaveBack: () => {
					if (assetsContainer) {
						gsap.to(assetsContainer, { opacity: 0, duration: 0.8, ease: 'power2.in' });
					}
				},
			})
		);

		// ===== ScrollTrigger: 文字浮現動畫 =====
		// 標題
		if (heading) {
			trackTrigger(
				ScrollTrigger.create({
					trigger: heading,
					start: 'top 85%',
					onEnter: () => {
						gsap.to(heading, {
							opacity: 1, y: 0,
							duration: textDuration, ease: 'power3.out',
						});
						// 如果有 split-char 也動畫化
						const chars = heading.querySelectorAll('.split-char');
						if (chars.length) {
							gsap.fromTo(chars,
								{ opacity: 0, y: 14, rotateX: 45 },
								{
									opacity: 1, y: 0, rotateX: 0,
									duration: textDuration, stagger: 0.03, ease: 'power3.out',
								}
							);
						}
					},
					once: true,
				})
			);
		}

		// 章節標籤
		if (label) {
			trackTrigger(
				ScrollTrigger.create({
					trigger: label,
					start: 'top 88%',
					onEnter: () => {
						gsap.to(label, {
							opacity: 1, y: 0,
							duration: 0.7, ease: 'power2.out',
						});
					},
					once: true,
				})
			);
		}

		// 段落文字逐行浮現
		lines.forEach((line, idx) => {
			trackTrigger(
				ScrollTrigger.create({
					trigger: line,
					start: 'top 88%',
					onEnter: () => {
						gsap.to(line, {
							opacity: 1, y: 0,
							duration: textDuration,
							delay: idx * staggerDelay,
							ease: 'power2.out',
						});
					},
					once: true,
				})
			);
		});

		// data-reveal 元素
		revealItems.forEach((item, idx) => {
			trackTrigger(
				ScrollTrigger.create({
					trigger: item,
					start: 'top 88%',
					onEnter: () => {
						gsap.to(item, {
							opacity: 1, y: 0,
							duration: textDuration,
							delay: idx * staggerDelay,
							ease: 'power2.out',
						});
					},
					once: true,
				})
			);
		});

		// 引言
		if (quote) {
			trackTrigger(
				ScrollTrigger.create({
					trigger: quote,
					start: 'top 85%',
					onEnter: () => {
						gsap.to(quote, {
							opacity: 1, y: 0,
							duration: textDuration * 1.2,
							ease: 'power2.out',
						});
					},
					once: true,
				})
			);
		}
	});

	// =====================================================
	// ===== 分割文字入場動畫 (CTA 等區域) =====
	// =====================================================
	const ctaSection = root.querySelector('[data-cta]');
	if (ctaSection) {
		const ctaSplit = ctaSection.querySelectorAll('[data-split]');
		ctaSplit.forEach(splitText);
		const ctaChars = ctaSection.querySelectorAll('.split-char');
		const ctaReveal = ctaSection.querySelectorAll('[data-reveal]');

		gsap.set(ctaChars, { opacity: 0, y: 14, rotateX: 45 });
		gsap.set(ctaReveal, { opacity: 0, y: 28 });

		trackTrigger(
			ScrollTrigger.create({
				trigger: ctaSection,
				start: 'top 80%',
				onEnter: () => {
					gsap.to(ctaChars, {
						opacity: 1, y: 0, rotateX: 0,
						duration: 0.8, stagger: 0.02, ease: 'power3.out',
					});
					gsap.to(ctaReveal, {
						opacity: 1, y: 0,
						duration: 1, stagger: 0.15, ease: 'power2.out', delay: 0.3,
					});
				},
				once: true,
			})
		);
	}

	// =====================================================
	// ===== 視差層效果 =====
	// =====================================================
	root.querySelectorAll('[data-parallax]').forEach((layer) => {
		const amount = Number(layer.dataset.parallax || 40);
		trackTween(
			gsap.to(layer, {
				y: amount,
				ease: 'none',
				scrollTrigger: {
					trigger: root,
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
				},
			})
		);
	});

	// =====================================================
	// ===== 進度條 =====
	// =====================================================
	if (progressBar) {
		trackTrigger(
			ScrollTrigger.create({
				trigger: root,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
				onUpdate: (self) => {
					gsap.set(progressBar, { scaleX: self.progress });
				},
			})
		);
	}

	// ===== 側邊進度指示點 =====
	sections.forEach((section, index) => {
		const dot = dots[index];
		if (!dot) return;
		trackTrigger(
			ScrollTrigger.create({
				trigger: section,
				start: 'top center',
				end: 'bottom center',
				onEnter: () => {
					gsap.to(dot, {
						scale: 1.4,
						backgroundColor: 'var(--scene-accent, #f8b84a)',
						boxShadow: '0 0 16px rgba(248, 184, 74, 0.7)',
						duration: 0.35,
					});
				},
				onEnterBack: () => {
					gsap.to(dot, {
						scale: 1.4,
						backgroundColor: 'var(--scene-accent, #f8b84a)',
						boxShadow: '0 0 16px rgba(248, 184, 74, 0.7)',
						duration: 0.35,
					});
				},
				onLeave: () => {
					gsap.to(dot, {
						scale: 1,
						backgroundColor: 'rgba(248, 250, 252, 0.25)',
						boxShadow: '0 0 0 rgba(248, 184, 74, 0)',
						duration: 0.35,
					});
				},
				onLeaveBack: () => {
					gsap.to(dot, {
						scale: 1,
						backgroundColor: 'rgba(248, 250, 252, 0.25)',
						boxShadow: '0 0 0 rgba(248, 184, 74, 0)',
						duration: 0.35,
					});
				},
			})
		);
	});

	// =====================================================
	// ===== 重點文字強調效果 =====
	// =====================================================
	root.querySelectorAll('[data-emphasis]').forEach((item) => {
		trackTrigger(
			ScrollTrigger.create({
				trigger: item,
				start: 'top 85%',
				onEnter: () => {
					gsap.fromTo(item,
						{ scale: 0.98, filter: 'brightness(0.9)' },
						{
							scale: 1.02, filter: 'brightness(1.15)',
							duration: 0.6, ease: 'power2.out',
							yoyo: true, repeat: 1,
						}
					);
				},
				once: true,
			})
		);
	});

	// =====================================================
	// ===== 鼠標跟蹤視差效果 =====
	// =====================================================
	const mouseLayers = Array.from(root.querySelectorAll('[data-mouse-layer]'));
	if (mouseLayers.length) {
		const setMouseX = gsap.quickSetter(root, '--mouse-x', '%');
		const setMouseY = gsap.quickSetter(root, '--mouse-y', '%');
		const layerSetters = mouseLayers.map((layer) => ({
			depth: Number(layer.dataset.mouseLayer || 0.2),
			x: gsap.quickSetter(layer, 'x', 'px'),
			y: gsap.quickSetter(layer, 'y', 'px'),
		}));

		const handleMove = (event) => {
			const rect = root.getBoundingClientRect();
			const relativeX = ((event.clientX - rect.left) / rect.width) * 100;
			const relativeY = ((event.clientY - rect.top) / rect.height) * 100;
			const offsetX = (relativeX - 50) / 50;
			const offsetY = (relativeY - 50) / 50;

			setMouseX(relativeX);
			setMouseY(relativeY);
			layerSetters.forEach((layer) => {
				layer.x(offsetX * 28 * layer.depth);
				layer.y(offsetY * 28 * layer.depth);
			});
		};

		const handleLeave = () => {
			setMouseX(50);
			setMouseY(28);
			layerSetters.forEach((layer) => {
				layer.x(0);
				layer.y(0);
			});
		};

		root.addEventListener('pointermove', handleMove);
		root.addEventListener('pointerleave', handleLeave);
		addCleanup(() => {
			root.removeEventListener('pointermove', handleMove);
			root.removeEventListener('pointerleave', handleLeave);
		});
	}

	// =====================================================
	// ===== CTA 按鈕入場和脈衝效果 =====
	// =====================================================
	const ctaButton = root.querySelector('[data-cta-button]');
	if (ctaButton) {
		gsap.set(ctaButton, { opacity: 0, y: 20 });
		trackTrigger(
			ScrollTrigger.create({
				trigger: ctaButton,
				start: 'top 85%',
				onEnter: () => {
					gsap.to(ctaButton, {
						opacity: 1, y: 0,
						duration: 0.8, ease: 'power3.out',
					});
					trackTween(
						gsap.to(ctaButton, {
							boxShadow: '0 16px 30px rgba(248, 184, 74, 0.45)',
							duration: 1.6,
							ease: 'sine.inOut',
							repeat: -1,
							yoyo: true,
						})
					);
				},
				once: true,
			})
		);
	}

	// ===== 重新整理 ScrollTrigger =====
	ScrollTrigger.refresh();
}

// ===== 清理函數 =====
export function cleanupStoryAnimations() {
	localTriggers.forEach((trigger) => trigger.kill());
	localTriggers = [];
	localTweens.forEach((tween) => tween.kill());
	localTweens = [];
	cleanupFns.forEach((fn) => fn());
	cleanupFns = [];
}
