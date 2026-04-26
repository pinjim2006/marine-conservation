// 垃圾資訊
const trashItems = [
	{ icon: '/marine-conservation/pngtree/fishing/plastic_bags.png', name: '塑膠袋', time: '500年', message: '塑膠袋是海洋污染的主要元凶之一。它們易被海洋生物誤食，造成窒息或腸道損傷。' },
	{ icon: '/marine-conservation/pngtree/fishing/straw.png', name: '吸管', time: '200年', message: '拋棄式吸管每年造成數百萬噸海洋垃圾。許多海龜、海鳥因此受傷。' },
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

// 撒網動作
castNetBtn.addEventListener('click', () => {
	castCount++;
	castNetBtn.disabled = true;

	// 隨機生成結果：80% 垃圾，20% 魚
	const isTrash = Math.random() < 0.8;

	// 撒網動畫
	networkEffect.innerHTML = '';
	const circle = document.createElement('div');
	circle.className = 'absolute inset-1/4 border-4 border-cyan-400 rounded-full animate-ping';
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

			// 展示垃圾信息面板
			showTrashInfo(randomTrash);

			// 添加垃圾圖示到畫面
			const trashDiv = document.createElement('div');
			trashDiv.className = 'absolute animate-bounce';
			trashDiv.style.left = Math.random() * 70 + 15 + '%';
			trashDiv.style.top = Math.random() * 60 + 20 + '%';
			
			if (randomTrash.icon.endsWith('.png')) {
				const img = document.createElement('img');
				img.src = randomTrash.icon;
				img.className = 'w-24 h-24 object-contain';
				trashDiv.appendChild(img);
			} else {
				trashDiv.textContent = randomTrash.icon;
				trashDiv.className = 'absolute text-6xl animate-bounce';
			}
			itemsContainer.appendChild(trashDiv);

			setTimeout(() => trashDiv.remove(), 3000);
		} else {
			// 顯示魚
			fishCount++;
			const fishDiv = document.createElement('div');
			fishDiv.className = 'absolute animate-bounce';
			fishDiv.style.left = Math.random() * 70 + 15 + '%';
			fishDiv.style.top = Math.random() * 60 + 20 + '%';
			
			const fishImg = document.createElement('img');
			fishImg.src = '/marine-conservation/pngtree/fishing/fish.png';
			fishImg.className = 'w-24 h-24 object-contain';
			fishDiv.appendChild(fishImg);
			itemsContainer.appendChild(fishDiv);

			// 顯示成功訊息
			showSuccessPanel();

			setTimeout(() => fishDiv.remove(), 3000);
		}

		updateStats();
		centerText.innerHTML = '<p class="text-xl text-cyan-200/60 font-semibold text-center">準備好再撒一次網？</p>';
		castNetBtn.disabled = false;
	}, 800);
});

// 顯示垃圾信息面板
function showTrashInfo(trash) {
	const trashIconEl = document.getElementById('trashIcon');
	trashIconEl.innerHTML = '';
	
	if (trash.icon.endsWith('.png')) {
		const img = document.createElement('img');
		img.src = trash.icon;
		img.className = 'w-20 h-20 object-contain mx-auto';
		trashIconEl.appendChild(img);
	} else {
		trashIconEl.textContent = trash.icon;
		trashIconEl.className = 'text-4xl';
	}
	
	document.getElementById('trashName').textContent = trash.name;
	document.getElementById('decompositionTime').textContent = trash.time;
	document.getElementById('trashMessage').textContent = trash.message;
	trashInfoPanel.style.display = 'flex';
}

// 顯示成功訊息面板
function showSuccessPanel() {
	const successIconEl = document.querySelector('#successPanel .text-5xl');
	successIconEl.innerHTML = '';
	const img = document.createElement('img');
	img.src = '/marine-conservation/pngtree/fishing/fish.png';
	img.className = 'w-20 h-20 object-contain mx-auto';
	successIconEl.appendChild(img);
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
	centerText.innerHTML = '<p class="text-xl text-cyan-200/60 font-semibold text-center">點擊準備好撒網！</p>';
	updateStats();
	castNetBtn.disabled = false;
});

// 初始化統計
updateStats();
