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
 * Scene 1: 垂直光幕 (Volumetric Light)
 * 頂部垂下柔和的光束，緩慢晃動
 */
function createScene1Lightshafts(container) {
	if (!container) return;

	for (let i = 0; i < 6; i++) {
		const shaft = document.createElement('div');
		shaft.className = 'scene-lightshaft';
		shaft.style.left = `${10 + i * 15}%`;
		shaft.style.opacity = `${gsap.utils.random(0.1, 0.25)}`;
		const width = gsap.utils.random(8, 18);
		shaft.style.transform = `scaleX(${width})`;
		container.appendChild(shaft);

		// 光幕柔和晃動 — opacity + scaleX yoyo
		trackTween(gsap.to(shaft, {
			opacity: gsap.utils.random(0.06, 0.3),
			scaleX: width + gsap.utils.random(-4, 6),
			duration: gsap.utils.random(3, 6),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: i * 0.8,
		}));

		// 輕微水平漂移
		trackTween(gsap.to(shaft, {
			x: gsap.utils.random(-20, 20),
			duration: gsap.utils.random(6, 12),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: i * 0.5,
		}));
	}
}

/**
 * Scene 1: 極細小半透明氣泡
 * 大量氣泡以極快速度向上狂奔
 */
function createScene1Bubbles(container) {
	if (!container) return;

	const count = 55;
	for (let i = 0; i < count; i++) {
		const bubble = document.createElement('div');
		bubble.className = 'scene-bubble';
		const size = gsap.utils.random(2, 7);
		bubble.style.width = `${size}px`;
		bubble.style.height = `${size}px`;
		bubble.style.left = `${gsap.utils.random(2, 98)}%`;
		bubble.style.top = `${gsap.utils.random(80, 130)}%`;
		bubble.style.opacity = `${gsap.utils.random(0.15, 0.6)}`;
		container.appendChild(bubble);

		// 極快上升 — 前景速度感
		trackTween(gsap.to(bubble, {
			y: `-${gsap.utils.random(150, 250)}vh`,
			x: gsap.utils.random(-30, 30),
			duration: gsap.utils.random(6, 14),
			repeat: -1,
			ease: 'none',
			delay: gsap.utils.random(0, 8),
		}));

		// 氣泡輕微搖擺
		trackTween(gsap.to(bubble, {
			x: `+=${gsap.utils.random(-15, 15)}`,
			duration: gsap.utils.random(1.5, 3),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		}));
	}
}

/**
 * Scene 2: 銀色水平光暈 (Silver Streaks)
 * 模擬魚群「魚球 (Bait Ball)」的交錯穿梭
 */
function createScene2Streaks(container, layer) {
	if (!container) return;

	const counts = { 'bg': 20, 'mid': 25, 'fg': 18 };
	const count = counts[layer] || 20;

	for (let i = 0; i < count; i++) {
		const streak = document.createElement('div');
		const isGlow = Math.random() > 0.7;
		streak.className = isGlow ? 'scene-streak scene-streak--glow' : 'scene-streak';

		const width = gsap.utils.random(40, 160);
		streak.style.width = `${width}px`;
		streak.style.top = `${gsap.utils.random(8, 92)}%`;
		streak.style.opacity = `${gsap.utils.random(0.15, 0.55)}`;

		const fromLeft = Math.random() > 0.5;
		if (fromLeft) {
			streak.style.left = `-${width + 20}px`;
		} else {
			streak.style.right = `-${width + 20}px`;
		}
		container.appendChild(streak);

		// 速度根據層次變化 — 前景快，背景慢
		const speedMultiplier = layer === 'fg' ? 0.5 : layer === 'mid' ? 0.8 : 1.2;
		const duration = gsap.utils.random(3, 8) * speedMultiplier;
		const xDist = fromLeft ? '120vw' : '-120vw';

		trackTween(gsap.to(streak, {
			x: xDist,
			duration: duration,
			repeat: -1,
			ease: 'none',
			delay: gsap.utils.random(0, 5),
		}));

		// 部分光暈搭配 scaleY 脈動效果
		if (isGlow) {
			trackTween(gsap.to(streak, {
				scaleY: gsap.utils.random(1.5, 3),
				opacity: gsap.utils.random(0.3, 0.7),
				duration: gsap.utils.random(0.5, 1.5),
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			}));
		}
	}
}

/**
 * Scene 3: 漂浮垃圾碎片
 * 抽象幾何形狀緩慢沉降
 */
function createScene3Debris(container) {
	if (!container) return;

	const types = ['bag', 'bottle', 'fragment'];
	for (let i = 0; i < 18; i++) {
		const debris = document.createElement('div');
		const type = types[i % types.length];
		debris.className = `scene-debris scene-debris--${type}`;

		const size = gsap.utils.random(12, 40);
		debris.style.width = `${size}px`;
		debris.style.height = `${type === 'bottle' ? size * 2.5 : size}px`;
		debris.style.left = `${gsap.utils.random(3, 97)}%`;
		debris.style.top = `${gsap.utils.random(-25, -5)}%`;
		debris.style.opacity = '0';
		container.appendChild(debris);

		// 緩慢沉降 + 旋轉
		trackTween(gsap.to(debris, {
			y: '130vh',
			x: gsap.utils.random(-50, 50),
			rotation: gsap.utils.random(-120, 120),
			opacity: gsap.utils.random(0.15, 0.4),
			duration: gsap.utils.random(18, 35),
			repeat: -1,
			ease: 'sine.inOut',
			delay: gsap.utils.random(0, 10),
		}));
	}
}

/**
 * Scene 4: 毒性徑向漸層光斑
 * 不規則的毒綠色/暗紫色脈動
 */
function createScene4ToxicGlow(container) {
	if (!container) return;

	const glows = [
		{ type: 'green', x: '20%', y: '30%', size: 300 },
		{ type: 'purple', x: '70%', y: '60%', size: 250 },
		{ type: 'green', x: '50%', y: '80%', size: 200 },
		{ type: 'purple', x: '85%', y: '20%', size: 180 },
	];

	glows.forEach((config, i) => {
		const glow = document.createElement('div');
		glow.className = `scene-toxic-glow scene-toxic-glow--${config.type}`;
		glow.style.left = config.x;
		glow.style.top = config.y;
		glow.style.width = `${config.size}px`;
		glow.style.height = `${config.size}px`;
		glow.style.opacity = '0';
		container.appendChild(glow);

		// 不規則脈動
		trackTween(gsap.to(glow, {
			opacity: gsap.utils.random(0.4, 0.8),
			scale: gsap.utils.random(0.7, 1.4),
			duration: gsap.utils.random(3, 7),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: i * 1.2,
		}));

		// 緩慢漂移
		trackTween(gsap.to(glow, {
			x: gsap.utils.random(-40, 40),
			y: gsap.utils.random(-40, 40),
			duration: gsap.utils.random(8, 15),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		}));
	});
}

/**
 * Scene 4: 尖銳微塑膠碎片
 * 混亂的視差效果 + 神經質抖動
 */
function createScene4Microplastic(container) {
	if (!container) return;

	const shapes = ['triangle', 'diamond', 'sliver', 'jagged'];
	const colors = [
		'rgba(255,255,255,0.5)',
		'rgba(200,220,255,0.4)',
		'rgba(255,180,180,0.35)',
		'rgba(180,255,180,0.3)',
		'rgba(255,255,180,0.4)',
		'rgba(255,120,120,0.3)',
		'rgba(120,255,200,0.3)',
	];

	for (let i = 0; i < 90; i++) {
		const shard = document.createElement('div');
		const shape = shapes[i % shapes.length];
		shard.className = `scene-shard scene-shard--${shape}`;

		const size = gsap.utils.random(6, 24);
		shard.style.width = `${size}px`;
		shard.style.height = `${size}px`;
		shard.style.left = `${gsap.utils.random(1, 99)}%`;
		shard.style.top = `${gsap.utils.random(1, 99)}%`;
		shard.style.opacity = `${gsap.utils.random(0.1, 0.45)}`;
		shard.style.background = colors[Math.floor(Math.random() * colors.length)];
		shard.style.transform = `rotate(${gsap.utils.random(0, 360)}deg)`;
		container.appendChild(shard);

		// 神經質的隨機抖動 — 極度混亂
		const jitterTl = gsap.timeline({ repeat: -1 });
		const jitterCount = gsap.utils.random(4, 8, 1);
		for (let j = 0; j < jitterCount; j++) {
			jitterTl.to(shard, {
				x: gsap.utils.random(-15, 15),
				y: gsap.utils.random(-15, 15),
				rotation: `+=${gsap.utils.random(-30, 30)}`,
				duration: gsap.utils.random(0.15, 0.6),
				ease: 'power1.inOut',
			});
		}
		trackTween(jitterTl);

		// 部分碎片有獨立的漂浮運動 — 有些飛快、有些緩慢
		if (Math.random() > 0.4) {
			const speed = Math.random() > 0.5 ? gsap.utils.random(2, 5) : gsap.utils.random(10, 20);
			const direction = Math.random() > 0.5 ? 1 : -1;
			trackTween(gsap.to(shard, {
				y: `${direction * gsap.utils.random(50, 150)}`,
				x: `${direction * gsap.utils.random(-80, 80)}`,
				duration: speed,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				delay: gsap.utils.random(0, 3),
			}));
		}
	}
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
			case 'lightshafts': createScene1Lightshafts(container); break;
			case 'bubbles': createScene1Bubbles(container); break;
			case 'streaks-bg': createScene2Streaks(container, 'bg'); break;
			case 'streaks-mid': createScene2Streaks(container, 'mid'); break;
			case 'streaks-fg': createScene2Streaks(container, 'fg'); break;
			case 'debris': createScene3Debris(container); break;
			case 'toxic-glow': createScene4ToxicGlow(container); break;
			case 'microplastic': createScene4Microplastic(container); break;
		}
	});

	// =====================================================
	// ===== 背景色平滑漸變 =====
	// 使用 per-section ScrollTrigger + onEnter/onEnterBack
	// (GSAP 無法在 scrub timeline 中插值 CSS 自訂屬性色彩字串)
	// =====================================================

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
		const label = section.querySelector('.story-section__label');
		const heading = section.querySelector('h2');
		const quote = section.querySelector('.story-quote');
		const headingChars = heading ? Array.from(heading.querySelectorAll('.split-char')) : [];
		const lines = Array.from(section.querySelectorAll('.story-body .story-line'));
		const lineCount = lines.length;
		const baseScroll = isLastScene ? 900 : 700;
		const perLineScroll = isLastScene ? 170 : 140;
		const scrollDistance = Math.max(1200, baseScroll + lineCount * perLineScroll);

		const applySceneColors = () => {
			trackTween(gsap.to(root, {
				'--scene-color': section.dataset.sceneColor || '#0d4f4f',
				'--scene-color-end': section.dataset.sceneEnd || '#0a3d5c',
				'--scene-accent': section.dataset.sceneAccent || '#5eead4',
				duration: 1.2,
				ease: 'power2.inOut',
			}));
		};

		// 設定初始狀態 — 進場前全隱藏
		if (label) gsap.set(label, { opacity: 0, y: 24 });
		if (headingChars.length) {
			gsap.set(headingChars, { opacity: 0, y: 18, rotateX: 45 });
		} else if (heading) {
			gsap.set(heading, { opacity: 0, y: 36 });
		}
		if (quote) gsap.set(quote, { opacity: 0, y: 24 });
		gsap.set(lines, { opacity: 0, y: 28 });

		const headingStagger = headingChars.length ? 0.03 : 0;
		const headingAnimDuration = headingChars.length
			? 0.8 + headingStagger * Math.max(0, headingChars.length - 1)
			: heading
				? 0.8
				: 0;
		const headerLead = Math.max(label ? 0.6 : 0, headingAnimDuration) + 0.2;
		const lineDuration = isLastScene ? 1.1 : 0.85;
		const lineStagger = isLastScene ? 0.5 : 0.32;

		const pinTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: `+=${scrollDistance}`,
				scrub: true,
				pin: true,
				pinSpacing: true,
				anticipatePin: 1,
				onEnter: applySceneColors,
				onEnterBack: applySceneColors,
			},
		});
		trackTween(pinTimeline);

		if (label) {
			pinTimeline.to(label, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power2.out',
			}, 0);
		}

		if (headingChars.length) {
			pinTimeline.to(headingChars, {
				opacity: 1,
				y: 0,
				rotateX: 0,
				duration: 0.8,
				stagger: headingStagger,
				ease: 'power3.out',
			}, 0.05);
		} else if (heading) {
			pinTimeline.to(heading, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			}, 0.05);
		}

		pinTimeline.addLabel('lines-start', headerLead);
		if (quote) {
			pinTimeline.to(quote, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power2.out',
			}, 'lines-start');
		}

		if (lines.length) {
			pinTimeline.to(lines, {
				opacity: 1,
				y: 0,
				duration: lineDuration,
				stagger: lineStagger,
				ease: 'power2.out',
			}, 'lines-start');
		}

		// ===== ScrollTrigger: 視差層速度差 =====
		const bgLayers = section.querySelectorAll('[data-parallax-layer="bg"]');
		const midDecoLayers = section.querySelectorAll('[data-parallax-layer="mid-deco"]');
		const fgLayers = section.querySelectorAll('[data-parallax-layer="fg"]');
		const overlayLayers = section.querySelectorAll('[data-parallax-layer="overlay"]');

		// 背景層 — 慢速
		bgLayers.forEach(layer => {
			trackTween(gsap.to(layer, {
				yPercent: -8,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			}));
		});

		// 中景裝飾層 — 中速
		midDecoLayers.forEach(layer => {
			trackTween(gsap.to(layer, {
				yPercent: -18,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			}));
		});

		// 前景層 — 快速
		fgLayers.forEach(layer => {
			trackTween(gsap.to(layer, {
				yPercent: -30,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			}));
		});

		// 覆蓋層 — 極慢速 (塑膠薄膜的黏稠感)
		overlayLayers.forEach(layer => {
			trackTween(gsap.to(layer, {
				yPercent: -3,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			}));
		});

	});

	// =====================================================
	// ===== Scene 3: 塑膠薄膜特殊效果 =====
	// 速度設定比視窗滾動還慢 — 創造黏稠阻力感
	// =====================================================
	const plasticFilm = root.querySelector('[data-plastic-film]');
	if (plasticFilm) {
		const plasticSection = plasticFilm.closest('[data-story-section]');
		if (plasticSection) {
			// 進入時淡入
			trackTrigger(
				ScrollTrigger.create({
					trigger: plasticSection,
					start: 'top 60%',
					end: 'bottom 40%',
					onEnter: () => {
						gsap.to(plasticFilm, {
							opacity: 0.6,
							duration: 3,
							ease: 'power2.out',
						});
					},
					onLeave: () => {
						gsap.to(plasticFilm, {
							opacity: 0,
							duration: 1.5,
							ease: 'power2.in',
						});
					},
					onEnterBack: () => {
						gsap.to(plasticFilm, {
							opacity: 0.6,
							duration: 3,
							ease: 'power2.out',
						});
					},
					onLeaveBack: () => {
						gsap.to(plasticFilm, {
							opacity: 0,
							duration: 1.5,
							ease: 'power2.in',
						});
					},
				})
			);

			// 薄膜的有機變形 — 緩慢不規則形變
			trackTween(gsap.to(plasticFilm, {
				borderRadius: '50% 40% 60% 40% / 40% 50% 40% 60%',
				scale: 1.1,
				x: 30,
				duration: 12,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			}));
		}
	}

	// =====================================================
	// ===== Scene 5: 魚鉤擺盪效果 =====
	// 極端緩慢的左右晃動
	// =====================================================
	const fishhook = root.querySelector('[data-fishhook]');
	if (fishhook) {
		const hookSection = fishhook.closest('[data-story-section]');
		const hookSvg = fishhook.querySelector('.scene-fishhook');
		const floatLight = fishhook.querySelector('[data-float-light]');

		// 魚鉤隨看不見的海流極端緩慢晃動
		if (hookSvg) {
			trackTween(gsap.to(hookSvg, {
				rotation: 8,
				duration: 6,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			}));
		}

		// 整體容器也有輕微擺動
		trackTween(gsap.to(fishhook, {
			x: 15,
			rotation: 3,
			duration: 8,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		}));

		// 微弱發光浮標 — 呼吸般的脈動
		if (floatLight) {
			trackTween(gsap.to(floatLight, {
				opacity: 0.15,
				scale: 0.6,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			}));
		}
	}

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
	// ===== 英雄區段視差效果 =====
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
						backgroundColor: 'var(--scene-accent, #5eead4)',
						boxShadow: '0 0 16px rgba(94, 234, 212, 0.5)',
						duration: 0.35,
					});
				},
				onEnterBack: () => {
					gsap.to(dot, {
						scale: 1.4,
						backgroundColor: 'var(--scene-accent, #5eead4)',
						boxShadow: '0 0 16px rgba(94, 234, 212, 0.5)',
						duration: 0.35,
					});
				},
				onLeave: () => {
					gsap.to(dot, {
						scale: 1,
						backgroundColor: 'rgba(248, 250, 252, 0.2)',
						boxShadow: '0 0 0 rgba(94, 234, 212, 0)',
						duration: 0.35,
					});
				},
				onLeaveBack: () => {
					gsap.to(dot, {
						scale: 1,
						backgroundColor: 'rgba(248, 250, 252, 0.2)',
						boxShadow: '0 0 0 rgba(94, 234, 212, 0)',
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
							boxShadow: '0 16px 30px rgba(94, 234, 212, 0.35)',
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
