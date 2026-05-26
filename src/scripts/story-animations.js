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
// 註冊清理函數，用於路由切換時卸載動畫
const addCleanup = (fn) => cleanupFns.push(fn);

// 追蹤 ScrollTrigger 實例
const trackTrigger = (trigger) => {
	if (trigger) {
		localTriggers.push(trigger);
	}
	return trigger;
};

// 追蹤 GSAP 動畫實例
const trackTween = (tween) => {
	if (tween) {
		localTweens.push(tween);
	}
	if (tween?.scrollTrigger) {
		localTriggers.push(tween.scrollTrigger);
	}
	return tween;
};

// ===== 文字分割函數 ===== 
// 將文字分割成單個字符或單詞，用於逐個動畫化
const splitText = (element) => {
	if (!element || element.dataset.splitReady === 'true') {
		return;
	}

	const text = element.textContent?.trim();
	if (!text) {
		return;
	}

	// 檢測是否為 CJK 文字（中日韓），決定分割方式
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
// 將段落按句子分行，用於漸進式顯示
// ===== 段落分行函數 =====
// 將段落按句子分行，用於漸進式顯示
const sentenceRegex = /[^。！？!?；;]+[。！？!?；;]?/g;

const splitParagraphIntoLines = (paragraph) => {
	if (!paragraph || paragraph.dataset.linesReady === 'true') {
		return;
	}

	const nodes = Array.from(paragraph.childNodes);
	if (!nodes.length) {
		return;
	}

	// 建立新的行容器
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

	// 遍歷所有子節點，按句號、感歎號等分行
	nodes.forEach((node) => {
		if (node.nodeType === Node.TEXT_NODE) {
			const text = node.textContent || '';
			const parts = text.match(sentenceRegex) || [];
			parts.forEach((part) => {
				if (!part.trim()) {
					return;
				}
				currentLine.appendChild(document.createTextNode(part));
				if (/[。！？!?；;]$/.test(part.trim())) {
					pushLine();
				}
			});
			return;
		}

		if (node.nodeType === Node.ELEMENT_NODE) {
			currentLine.appendChild(node);
			const tailText = node.textContent || '';
			if (/[。！？!?；;]$/.test(tailText.trim())) {
				pushLine();
			}
		}
	});

	pushLine();
	paragraph.textContent = '';
	lines.forEach((line) => paragraph.appendChild(line));
	paragraph.dataset.linesReady = 'true';
};

// ===== 章節滾動距離計算函數 =====
// 根據章節內容動態計算需要的滾動距離，用於平衡不同長度的章節
const getSectionScrollDistance = (section) => {
	const label = section.querySelector('.story-section__label');
	const heading = section.querySelector('h2');
	const quote = section.querySelector('.story-quote');
	const lines = section.querySelectorAll('.story-body .story-line');
	const base = window.innerHeight * 0.9;
	const lineCost = Math.max(lines.length, 1) * 160;
	const headingCost = heading ? 220 : 0;
	const quoteCost = quote ? 220 : 0;
	const labelCost = label ? 120 : 0;
	return Math.max(base, labelCost + headingCost + quoteCost + lineCost + 240);
};


// ===== 主動畫初始化函數 =====
// 初始化所有故事頁面的動畫效果
export function initStoryAnimations() {
	cleanupStoryAnimations();
	const root = document.querySelector('[data-story-root]');
	if (!root) {
		return;
	}

	// ===== 檢查運動偏好設定 =====
	// 如果用戶啟用了 prefers-reduced-motion，略過所有動畫
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	
	// ===== DOM 元素選擇 =====
	const content = root.querySelector('[data-story-content]');
	const sections = content ? Array.from(content.querySelectorAll('[data-story-section]')) : [];
	const scene = root.querySelector('[data-scene-backdrop]');
	const progressBar = root.querySelector('[data-progress-bar]');
	const dots = root.querySelectorAll('[data-progress-dot]');
	const hero = root.querySelector('[data-story-hero]');

	// ===== 文字準備 =====
	// 分割需要逐字動畫的文字元素
	const splitTargets = root.querySelectorAll('[data-split]');
	splitTargets.forEach(splitText);

	// 分割段落成行，用於漸進式顯示
	const storyParagraphs = content ? Array.from(content.querySelectorAll('.story-body p')) : [];
	storyParagraphs.forEach(splitParagraphIntoLines);

	// ===== 運動偏好處理 =====
	if (prefersReduced) {
		root.classList.add('story-reduced-motion');
		return;
	}

	// ===== 英雄區段入場動畫 =====
	// 標題、副標題和元訊息的漸進式入場
	if (hero) {
		const heroTimeline = gsap.timeline();
		const heroItems = hero.querySelectorAll('.story-kicker, .story-hero__meta, .story-scroll-hint');
		const heroSplitChars = hero.querySelectorAll('[data-split] .split-char');
		gsap.set(heroItems, { opacity: 0, y: 26 });
		gsap.set(heroSplitChars, { opacity: 0, y: 18, rotateX: 55 });
		heroTimeline
			// 標題字符逐個出現
			.to(heroSplitChars, {
				opacity: 1,
				y: 0,
				rotateX: 0,
				duration: 0.9,
				stagger: 0.02,
				ease: 'power3.out',
			})
			// 其他元素隨後入場
			.to(
				heroItems,
				{
					opacity: 1,
					y: 0,
					duration: 1.1,
					stagger: 0.12,
					ease: 'power3.out',
				},
				'-=0.4'
			);
		trackTween(heroTimeline);
	}

	// ===== 章節動畫主邏輯 =====
	if (content) {
		sections.forEach((section) => {
			const label = section.querySelector('.story-section__label');
			const heading = section.querySelector('h2');
			const quote = section.querySelector('.story-quote');
			const lines = Array.from(section.querySelectorAll('.story-body .story-line'));
			const introItems = [label, heading].filter(Boolean);

			if (!introItems.length && !lines.length) {
				return;
			}

			// ===== 章節初始狀態設定 =====
			gsap.set(label, { opacity: 1, y: 0 });
			gsap.set(heading, { opacity: 0, y: 22 });
			if (quote) {
				gsap.set(quote, { opacity: 0, y: 22 });
			}
			gsap.set(lines, { opacity: 0, y: 28 });

			// ===== 章節滾動觸發時間線 =====
			// 根據滾動距離逐步顯示內容和切換背景色彩
			const sectionTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: 'top top+=90',
					end: () => `+=${getSectionScrollDistance(section)}`,
					scrub: 1,        // 連接到滾動速度
					pin: true,       // 固定章節在視口
					anticipatePin: 1,
					invalidateOnRefresh: true,
					pinSpacing: true,
				},
			});

			// ===== 背景色彩轉換 =====
			// 平滑過渡到該章節的主題色
			sectionTimeline
				.to(root, {
					'--scene-color': section.dataset.sceneColor || '#0b1d2c',
					'--scene-color-end': section.dataset.sceneEnd || '#05070d',
					'--scene-accent': section.dataset.sceneAccent || '#f8b84a',
					duration: 0.45,
					ease: 'none',
				}, 0)
				// 標題入場
				.to(heading, {
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: 'power2.out',
				}, 0.1);

			// ===== 引言動畫 =====
			if (quote) {
				sectionTimeline.to(quote, {
					opacity: 1,
					y: 0,
					duration: 0.55,
					ease: 'power2.out',
				}, '>-0.05');
			}

			// ===== 段落行動畫 =====
			// 多行文字逐行顯示
			if (lines.length) {
				const lineSpread = Math.max(0.7, lines.length * 0.12);
				sectionTimeline.to(lines, {
					opacity: 1,
					y: 0,
					duration: lineSpread,
					stagger: 0.1,
					ease: 'power2.out',
				}, '>-0.05');
			}

			// ===== 標題文字字符動畫 =====
			if (heading) {
				sectionTimeline.fromTo(
					heading,
					{ opacity: 0, y: 22 },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
					0.08
				);
			}

			trackTween(sectionTimeline);
		});
	}

	// ===== 分割文字入場動畫 =====
	// 當文字進入視口時觸發逐字顯示效果
	const splitElements = content ? content.querySelectorAll('[data-split]') : [];
	splitElements.forEach((element) => {
		const chars = element.querySelectorAll('.split-char');
		if (!chars.length) {
			return;
		}
		gsap.set(chars, { opacity: 0, y: 14, rotateX: 45 });
		trackTrigger(
			ScrollTrigger.create({
				trigger: element,
				start: 'top 85%',
				onEnter: () => {
					gsap.to(chars, {
						opacity: 1,
						y: 0,
						rotateX: 0,
						duration: 0.8,
						stagger: 0.02,
						ease: 'power3.out',
					});
				},
				once: true,
			})
		);
	});

	// ===== 視差層效果 =====
	// 根據 data-parallax 屬性創建深度感（背景更慢移動）
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

	// ===== 背景色彩主系統 =====
	// 根據當前可見章節動態更新頁面背景色彩
	if (scene && sections.length) {
		const first = sections[0];
		root.style.setProperty('--scene-color', first.dataset.sceneColor || '#0b1d2c');
		root.style.setProperty('--scene-color-end', first.dataset.sceneEnd || '#05070d');
		root.style.setProperty('--scene-accent', first.dataset.sceneAccent || '#f8b84a');

		sections.forEach((section) => {
			const color = section.dataset.sceneColor || '#0b1d2c';
			const end = section.dataset.sceneEnd || '#05070d';
			const accent = section.dataset.sceneAccent || '#f8b84a';
			trackTrigger(
				ScrollTrigger.create({
					trigger: section,
					start: 'top 65%',
					end: 'bottom 35%',
					// 向下滾動進入時更新顏色
					onEnter: () => {
						trackTween(
							gsap.to(root, {
								'--scene-color': color,
								'--scene-color-end': end,
								'--scene-accent': accent,
								duration: 0.9,
								ease: 'power2.out',
							})
						);
					},
					// 向上滾動回到時恢復顏色
					onEnterBack: () => {
						trackTween(
							gsap.to(root, {
								'--scene-color': color,
								'--scene-color-end': end,
								'--scene-accent': accent,
								duration: 0.9,
								ease: 'power2.out',
							})
						);
					},
				})
			);
		});
	}

	// ===== 頂部進度條 =====
	// 顯示整個頁面的滾動進度
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
	// 5 個點分別對應 5 個章節，滾動到相應章節時突出顯示
	sections.forEach((section, index) => {
		const dot = dots[index];
		if (!dot) {
			return;
		}
		trackTrigger(
			ScrollTrigger.create({
				trigger: section,
				start: 'top center',
				end: 'bottom center',
				// 進入章節時點亮
				onEnter: () => {
					gsap.to(dot, {
						scale: 1.2,
						backgroundColor: '#f8b84a',
						boxShadow: '0 0 14px rgba(248, 184, 74, 0.6)',
						duration: 0.3,
					});
				},
				// 向上滾動回到時也點亮
				onEnterBack: () => {
					gsap.to(dot, {
						scale: 1.2,
						backgroundColor: '#f8b84a',
						boxShadow: '0 0 14px rgba(248, 184, 74, 0.6)',
						duration: 0.3,
					});
				},
				// 離開章節時熄滅
				onLeave: () => {
					gsap.to(dot, {
						scale: 1,
						backgroundColor: 'rgba(248, 250, 252, 0.25)',
						boxShadow: '0 0 0 rgba(248, 184, 74, 0)',
						duration: 0.3,
					});
				},
				onLeaveBack: () => {
					gsap.to(dot, {
						scale: 1,
						backgroundColor: 'rgba(248, 250, 252, 0.25)',
						boxShadow: '0 0 0 rgba(248, 184, 74, 0)',
						duration: 0.3,
					});
				},
			})
		);
	});

	// ===== 重點文字強調效果 =====
	// 帶有 data-emphasis 的文字在進入視口時會有脈衝效果
	root.querySelectorAll('[data-emphasis]').forEach((item) => {
		trackTrigger(
			ScrollTrigger.create({
				trigger: item,
				start: 'top 85%',
				onEnter: () => {
					gsap.fromTo(
						item,
						{ scale: 0.98, filter: 'brightness(0.9)' },
						{
							scale: 1.02,
							filter: 'brightness(1.1)',
							duration: 0.6,
							ease: 'power2.out',
							yoyo: true,
							repeat: 1,
						}
					);
				},
				once: true,
			})
		);
	});

	// ===== 污染物品浮動效果 =====
	// 第三章中的垃圾和污染物品會自動浮動和旋轉
	root.querySelectorAll('[data-pollution-float]').forEach((item, index) => {
		const drift = gsap.utils.random(-60, 60);
		const floatTween = gsap.to(item, {
			y: gsap.utils.random(-140, -220),
			x: drift,
			rotation: gsap.utils.random(-10, 12),
			duration: gsap.utils.random(6, 10),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			paused: true,
			delay: index * 0.1,
		});
		trackTween(floatTween);

		trackTrigger(
			ScrollTrigger.create({
				trigger: item,
				start: 'top 90%',
				onEnter: () => {
					gsap.to(item, { opacity: 0.7, duration: 1, ease: 'power2.out' });
					floatTween.play();
				},
			})
		);
	});

	// ===== 鼠標跟蹤視差效果 =====
	// 根據鼠標位置移動帶有 data-mouse-layer 的元素，創造互動感
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

	// ===== CTA 按鈕入場和脈衝效果 =====
	// 行動呼籲按鈕在進入視口時逐漸顯示並發出光芒
	const ctaButton = root.querySelector('[data-cta-button]');
	if (ctaButton) {
		gsap.set(ctaButton, { opacity: 0, y: 20 });
		trackTrigger(
			ScrollTrigger.create({
				trigger: ctaButton,
				start: 'top 85%',
				onEnter: () => {
					gsap.to(ctaButton, {
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: 'power3.out',
					});
					// 持續的發光脈衝效果
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
	// 確保所有觸發器正確對齐到 DOM
	ScrollTrigger.refresh();
}

// ===== 清理函數 =====
// 用於路由切換或組件卸載時清理所有動畫和事件監聽
export function cleanupStoryAnimations() {
	// 銷毀所有 ScrollTrigger 實例
	localTriggers.forEach((trigger) => trigger.kill());
	localTriggers = [];
	// 銷毀所有 GSAP 動畫
	localTweens.forEach((tween) => tween.kill());
	localTweens = [];
	// 執行自定義清理函數
	cleanupFns.forEach((fn) => fn());
	cleanupFns = [];
}
