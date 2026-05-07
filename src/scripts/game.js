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
			{
				src: '/marine-conservation/pngtree/fishing/plastic_bags_2.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(20deg);',
			}
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
	{
		name: '鋁罐 (Aluminum Can)',
		time: '100+ 年',
		message: '鋁罐在海洋環境中需要非常久才會分解，回收再利用能大幅減少海岸與海底垃圾。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/crushed_aluminum_can.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.52) brightness(0.8) contrast(0.9); transform: rotate(-10deg);',
			},
		],
	},
	{
		name: '帆布 (Canvas)',
		time: '1 年',
		message: '帆布雖屬可分解材質，但在海水與低氧環境中仍可能長時間殘留並纏繞生物。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/canvas.jpg',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.5) brightness(0.78) contrast(0.9); transform: rotate(12deg);',
			},
		],
	},
	{
		name: '汽車輪胎 (Car Tires)',
		time: '2,000 年',
		message: '汽車輪胎含有多種合成材料，分解極慢，還可能釋出微塑膠與有害化學物質。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/tire_damaged.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.45) brightness(0.74) contrast(0.95); transform: rotate(-2deg) scale(1.02);',
			},
		],
	},
	{
		name: '菸蒂 (Cigarette Butts)',
		time: '18 個月 - 10+ 年',
		message: '菸蒂中的濾嘴主要是塑膠纖維，會慢慢碎裂成微塑膠，危害魚類與底棲生物。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/cigarette.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(6deg) scale(0.96);',
			},
		],
	},
	{
		name: '棉質襯衫 (Cotton Shirt)',
		time: '2 - 5 個月',
		message: '天然纖維較容易分解，但若含染整化學物質，仍可能對海洋環境造成負擔。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Cotton_Shirt.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.58) brightness(0.86) contrast(0.92); transform: rotate(-7deg);',
			},
		],
	},
	{
		name: '拋棄式尿布 (Disposable diapers)',
		 time: '500 年',
		message: '拋棄式尿布含有塑膠與吸水高分子，若流入海洋，將長期存在並污染棲地。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Disposable_diapers.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.54) brightness(0.8) contrast(0.9); transform: rotate(9deg);',
			},
		],
	},
	{
		name: '玻璃瓶 (Glass Bottles)',
		time: '1,000,000 年',
		message: '玻璃在自然環境幾乎不會分解，破碎後還可能割傷海洋生物與人類。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/bottle.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.48) brightness(0.76) contrast(0.95); transform: rotate(-4deg) scale(1.03);',
			},
		],
	},
	{
		name: '麻繩 (Hemp Ropes)',
		time: '3 - 14 個月',
		message: '麻繩可分解，但在海中仍可能造成生物纏繞，需妥善回收避免遺留海域。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/rope.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
			},
			{
				src: '/marine-conservation/pngtree/fishing/rope (2).png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
			}
			
		],
	},
	{
		name: '皮革 (Leather)',
		time: '50 年',
		message: '皮革製品在海中分解緩慢，染色與鞣製殘留物也可能影響水質。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/belt.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.46) brightness(0.74) contrast(0.94); transform: rotate(-5deg);',
			},
		],
	},
	{
		name: '橘子皮 (Orange Peel)',
		time: '6 個月',
		message: '即使是廚餘，在海洋中也不該隨意丟棄，分解過程仍可能擾動當地生態平衡。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Orange_Peel.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.6) brightness(0.88) contrast(0.9); transform: rotate(-8deg);',
			},
		],
	},
	{
		name: '塗漆木材 (Painted Wood)',
		time: '13+ 年',
		message: '塗漆木材除了分解時間長，塗料中的化學成分也可能滲入海水。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Painted_Wood.jpg',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.44) brightness(0.76) contrast(0.96); transform: rotate(15deg);',
			},
		],
	},
	{
		name: '紙 (Paper)',
		time: '2 - 5 個月',
		message: '紙張相對容易分解，但大量棄置仍會造成海岸髒亂與局部生態壓力。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/paper_sheet.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
			},
			{
				src: '/marine-conservation/pngtree/fishing/paper_sheet (2).png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
			}
		],
	},
	{
		name: '寶特瓶 (Plastic Bottle)',
		time: '500+ 年',
		message: '寶特瓶是常見海洋垃圾，會破碎成微塑膠並長期影響海洋食物網。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/plastic_bottle.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-17deg);',
			},
		],
	},
	{
		name: '聚酯纖維織物 (Polyester Fabric)',
		time: '100+ 年',
		message: '聚酯纖維是塑膠材質，長期存在環境中，摩擦後會釋放微塑膠纖維。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Polyester_Fabric.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.52) brightness(0.8) contrast(0.9); transform: rotate(13deg) scale(1.01);',
			},
		],
	},
	{
		name: '聚氨酯座墊 (Polyurethane Cushions)',
		time: '1,000 年',
		message: '聚氨酯泡棉分解極慢，碎裂後可能被魚類誤食並累積於體內。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Polyurethane_Cushions.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.48) brightness(0.76) contrast(0.9); transform: rotate(-4deg) scale(1.04);',
			},
		],
	},
	{
		name: '衛生棉與棉條 (Sanitary Pads and Tampons)',
		time: '25+ 年',
		message: '衛生用品常含塑膠與吸收材料，若進入海洋會造成長期污染與纏繞風險。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Sanitary_Pads_and_Tampons.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.56) brightness(0.84) contrast(0.9); transform: rotate(-9deg);',
			},
		],
	},
	{
		name: '線 (Thread)',
		time: '3 - 4 個月',
		message: '細線看似不起眼，仍可能纏住小型海洋生物，造成移動與覓食困難。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/thread.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.54) brightness(0.84) contrast(0.88); transform: rotate(22deg) scale(0.93);',
			},
		],
	},
	{
		name: '蔬菜殘渣 (Vegetable Waste)',
		time: '5 天 - 1 個月',
		message: '有機廢棄物分解較快，但大量堆積仍會消耗氧氣並破壞局部海域生態。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/Vegetable_Waste.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.66) brightness(0.9) contrast(0.86); transform: rotate(-3deg);',
			},
		],
	},
	{
		name: '濕紙巾 (Wet Wipes)',
		time: '100+ 年',
		message: '多數濕紙巾含塑膠纖維，不易分解，常在海岸與排水系統中長期累積。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/wet_wipe.png',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.54) brightness(0.82) contrast(0.9); transform: rotate(5deg) scale(1.02);',
			},
		],
	},
	{
		name: '羊毛 (Wool)',
		time: '1 - 5 年',
		message: '羊毛可自然分解，但若混紡合成纖維或染料，仍會增加環境負擔。',
		variants: [
			{
				src: '/marine-conservation/pngtree/fishing/wool.jpg',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.58) brightness(0.86) contrast(0.9); transform: rotate(-13deg);',
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
	applyRandomTransform(image);

	wrapper.appendChild(image);
	return wrapper;
}

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

function applyRandomTransform(imageEl) {
	const rotateDeg = randomInRange(-16, 16).toFixed(2);
	const scaleRatio = randomInRange(0.94, 1.06).toFixed(3);
	const baseTransform = imageEl.style.transform ? `${imageEl.style.transform} ` : '';
	imageEl.style.transform = `${baseTransform}rotate(${rotateDeg}deg) scale(${scaleRatio})`;
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
			applyRandomTransform(img);
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
		applyRandomTransform(img);
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
