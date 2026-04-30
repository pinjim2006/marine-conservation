// 捕獲內容的多種呈現方式
const fishVariants = [
	{
		src: '/marine-conservation/pngtree/fishing/fish.png',
		className: 'w-20 h-20 object-contain',
		style: 'filter: saturate(0.7) brightness(0.88) contrast(0.95); transform: rotate(-10deg);',
	},
	{
		src: '/marine-conservation/pngtree/fishing/fish.png',
		className: 'w-20 h-20 object-contain scale-x-[-1]',
		style: 'filter: saturate(0.65) brightness(0.9) contrast(0.95); transform: rotate(8deg);',
	},
	{
		src: '/marine-conservation/pngtree/fishing/fish.png',
		className: 'w-20 h-20 object-contain',
		style: 'filter: saturate(0.62) brightness(0.86) contrast(0.9); transform: rotate(4deg) scale(0.96);',
	},
];

// 垃圾資訊
const trashItems = [
	{
		name: '塑膠袋',
		time: '500年',
		message: '塑膠袋是海洋污染的主要元凶之一。它們易被海洋生物誤食，造成窒息或腸道損傷。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/plastic_bags.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-12deg);',
			},
			{
				src: '/marine-conservation/pngtree/fishing/plastic_bags.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(10deg) scale(0.95);',
			},
		],
	},
	{
		name: '吸管',
		time: '200年',
		message: '拋棄式吸管每年造成數百萬噸海洋垃圾。許多海龜、海鳥因此受傷。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/straw.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(14deg);',
			},
			{
				src: '/marine-conservation/pngtree/fishing/straw.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.5) brightness(0.78) contrast(0.9); transform: rotate(-6deg) scale(1.03);',
			},
		],
	},
];

let castCount = 0;
let fishCount = 0;
let trashCount = 0;

// 獲取 DOM 元素
const castNetBtn = document.getElementById('castNetBtn');
const resetBtn = document.getElementById('resetBtn');
const castCountEl = document.getElementById('castCount');
const fishCountEl = document.getElementById('fishCount');
const trashCountEl = document.getElementById('trashCount');
const successRateEl = document.getElementById('successRate');
const itemsContainer = document.getElementById('itemsContainer');
const networkEffect = document.getElementById('networkEffect');
const centerText = document.getElementById('centertext');
const trashInfoPanel = document.getElementById('trashInfoPanel');
const successPanel = document.getElementById('successPanel');
const oceanBackground = document.getElementById('oceanBackground');

// 撒網夠率計算
function calculateSuccessRate() {
	if (castCount === 0) return 0;
	return Math.round((fishCount / castCount) * 100);
}

// 更新統計
function updateStats() {
	castCountEl.textContent = castCount.toString();
	fishCountEl.textContent = fishCount.toString();
	trashCountEl.textContent = trashCount.toString();
	successRateEl.textContent = calculateSuccessRate() + '%';
}

function getRandomCatchPosition() {
	if (!oceanBackground) {
		return { left: 50, top: 50 };
	}

	const bounds = oceanBackground.getBoundingClientRect();
	const widthRatio = bounds.width > 0 ? 24 / bounds.width : 0;
	const heightRatio = bounds.height > 0 ? 24 / bounds.height : 0;
	const left = 16 + Math.random() * (68 - widthRatio * 50);
	const top = 18 + Math.random() * (56 - heightRatio * 50);

	return {
		left: Math.max(12, Math.min(88, left)),
		top: Math.max(14, Math.min(78, top)),
	};
}

function createCatchNode(sprite) {
	const wrapper = document.createElement('div');
	wrapper.className = 'absolute pointer-events-none flex items-center justify-center';
	wrapper.style.left = `${sprite.left}%`;
	wrapper.style.top = `${sprite.top}%`;
	wrapper.style.transform = 'translate(-50%, -50%)';
	wrapper.style.zIndex = '10';

	const image = document.createElement('img');
	image.src = sprite.src;
	image.alt = sprite.alt;
	image.className = `${sprite.className} block mx-auto`;
	image.style.cssText = sprite.style;

	wrapper.appendChild(image);
	return wrapper;
}

// 撒網動作
castNetBtn.addEventListener('click', () => {
	castCount++;
	castNetBtn.disabled = true;

	// 隨機生成結果：80% 垃圾，20% 魚
	const isTrash = Math.random() < 0.8;

	// 撒網動畫
	networkEffect.innerHTML = '';
	const circle = document.createElement('div');
	circle.className = 'absolute inset-1/4 border-4 border-slate-400/50 rounded-full animate-ping';
	networkEffect.appendChild(circle);

	// 清空中心文字
	centerText.innerHTML = '';

	// 延遲顯示結果
	setTimeout(() => {
		networkEffect.innerHTML = '';

		if (isTrash) {
			// 顯示垃圾
			trashCount++;
			const randomTrash = trashItems[Math.floor(Math.random() * trashItems.length)];
			const randomTrashVariant = randomTrash.variants[Math.floor(Math.random() * randomTrash.variants.length)];

			// 展示垃圾信息面板
			showTrashInfo(randomTrash, randomTrashVariant);

			// 添加垃圾圖示到畫面
			const trashSprite = createCatchNode({
				...randomTrashVariant,
				...getRandomCatchPosition(),
				alt: randomTrash.name,
			});
			itemsContainer.appendChild(trashSprite);

		} else {
			// 顯示魚
			fishCount++;
			const fishVariant = fishVariants[Math.floor(Math.random() * fishVariants.length)];
			const fishSprite = createCatchNode({
				...fishVariant,
				...getRandomCatchPosition(),
				alt: '魚',
			});
			itemsContainer.appendChild(fishSprite);

			// 顯示成功訊息
			showSuccessPanel();

		}

		updateStats();
		centerText.innerHTML = '<p class="text-xl text-slate-300/60 font-semibold text-center">準備好再撒一次網？</p>';
		castNetBtn.disabled = false;
	}, 800);
});

// 顯示垃圾信息面板
function showTrashInfo(trash, variant) {
	const trashIconEl = document.getElementById('trashIcon');
	if (trashIconEl) {
		trashIconEl.innerHTML = '';
		if (variant && variant.src) {
			const img = document.createElement('img');
			img.src = variant.src;
			img.alt = trash.name;
			img.className = variant.className || 'w-20 h-20 object-contain mx-auto';
			img.style.cssText = variant.style || 'filter: saturate(0.55) brightness(0.82) contrast(0.92);';
			trashIconEl.appendChild(img);
		} else {
			trashIconEl.textContent = trash.name || '';
			trashIconEl.className = 'text-lg text-slate-300';
		}
	}
	
	document.getElementById('trashName').textContent = trash.name;
	document.getElementById('decompositionTime').textContent = trash.time;
	document.getElementById('trashMessage').textContent = trash.message;
	trashInfoPanel.style.display = 'flex';
}

// 顯示成功訊息面板
function showSuccessPanel() {
	const successIconEl = document.getElementById('successIcon');
	if (successIconEl) {
		successIconEl.innerHTML = '';
		const fishVariant = fishVariants[Math.floor(Math.random() * fishVariants.length)];
		const img = document.createElement('img');
		img.src = fishVariant.src;
		img.alt = '魚';
		img.className = fishVariant.className || 'w-20 h-20 object-contain mx-auto';
		img.style.cssText = fishVariant.style || 'filter: saturate(0.65) brightness(0.88) contrast(0.95);';
		successIconEl.appendChild(img);
	}
	successPanel.style.display = 'flex';
}

// 關閉面板按鈕
document.getElementById('closeInfoBtn').addEventListener('click', () => {
	trashInfoPanel.style.display = 'none';
});

document.getElementById('acknowledgeBtn').addEventListener('click', () => {
	trashInfoPanel.style.display = 'none';
});

document.getElementById('closeSuccessBtn').addEventListener('click', () => {
	successPanel.style.display = 'none';
});

document.getElementById('closeSuccessBtnConfirm').addEventListener('click', () => {
	successPanel.style.display = 'none';
});

// 重置按鈕
resetBtn.addEventListener('click', () => {
	castCount = 0;
	fishCount = 0;
	trashCount = 0;
	itemsContainer.innerHTML = '';
	centerText.innerHTML = '<p class="text-xl text-slate-300/60 font-semibold text-center">點擊準備好撒網！</p>';
	updateStats();
	castNetBtn.disabled = false;
});

// 初始化統計
updateStats();
