export type gameKey =
  | 'game.meta.title'| 'game.hero.title'| 'game.hero.desc'| 'game.canvas.prompt'| 'game.btn.cast'
  | 'game.btn.tenDraw'| 'game.btn.reset'  | 'game.stats.title'  | 'game.stats.castCount'
  | 'game.stats.fishCount'  | 'game.stats.trashCount'  | 'game.stats.successRate'  | 'game.stats.probability'
  | 'game.panel.close'  | 'game.panel.trash.type'  | 'game.panel.trash.timeLabel'  | 'game.panel.trash.unknown'  | 'game.trash.acknowledge' | 'game.panel.trash.acknowledge'
  | 'game.panel.success.title'  | 'game.panel.success.desc'  | 'game.panel.success.continue'  | 'game.panel.tenDraw.kicker'  | 'game.panel.tenDraw.title' 
  | 'game.panel.tenDraw.desc'  | 'game.edu.title'  | 'game.edu.1.title'  | 'game.edu.1.desc'  | 'game.edu.2.title'  | 'game.edu.2.desc'  | 'game.edu.3.title'  | 'game.edu.3.desc'
  | 'game.action.title'  | 'game.action.1'  | 'game.action.2'  | 'game.action.3'  | 'game.action.4';

// src/i18n/index.ts

// src/i18n/game.ts

type Locale = 'zh-tw' | 'en' | 'ja';

export const ui = {
  'zh-tw': {
    // Meta 與 標題區
    'game.meta.title': '撒網體驗 | 漁夫視角的海洋保育',
    'game.hero.title': '撒網體驗',
    'game.hero.desc': '踏入漁夫的日常，親身體驗撒網的刺激。但您會發現，現代海洋中充滿了意想不到的挑戰...',

    // 遊戲畫布與控制區
    'game.canvas.prompt': '點擊準備好撒網！',
    'game.canvas.readyAgain': '準備好再撒一次網？',
    'game.btn.cast': '撒網',
    'game.btn.tenDraw': '十連抽',
    'game.btn.reset': '重新開始',

    // 統計面板
    'game.stats.title': '統計',
    'game.stats.castCount': '撒網次數',
    'game.stats.fishCount': '捕到的魚',
    'game.stats.trashCount': '撈到的垃圾',
    'game.stats.successRate': '成功率',
    'game.stats.probability': '撈到魚的機率：20%<br>撈到垃圾的機率：80%',

    // 彈出視窗：垃圾資訊
    'game.panel.close': '關閉',
    'game.panel.trash.type': '垃圾類型',
    'game.panel.trash.timeLabel': '在海洋中分解所需時間',
    'game.panel.trash.unknown': '未知',
    'game.panel.trash.acknowledge': '我明白了',

    // 彈出視窗：捕魚成功
    'game.panel.success.title': '太棒了',
    'game.panel.success.desc': '您成功捕到了一條魚，但請記住，適度捕撈才是永續漁業的關鍵。',
    'game.panel.success.continue': '繼續',

    // 彈出視窗：十連抽
    'game.panel.tenDraw.kicker': 'Ten Draw',
    'game.panel.tenDraw.title': '十連抽結果',
    'game.panel.tenDraw.desc': '點選任一項目可查看詳細資訊',
    'game.tag.fish': '魚',
    'game.tag.trash': '垃圾',

    // 教育資訊區 (為什麼海洋中充滿垃圾)
    'game.edu.title': '為什麼海洋中充滿垃圾？',
    'game.edu.1.title': '陸上污染',
    'game.edu.1.desc': '城市和工業的廢棄物經由河流流入海洋，成為海洋污染的主要來源，約80%的海洋垃圾來自陸地。',
    'game.edu.2.title': '分解時間',
    'game.edu.2.desc': '塑膠袋需要500年才能分解，釣魚線需要600年，連最「容易」分解的物品也需要數十年。許多海洋生物因此受傷。',
    'game.edu.3.title': '生態威脅',
    'game.edu.3.desc': '海洋生物誤食或被纏繞導致傷害或死亡。永續漁業的推動尤為重要，才能保護既有的海洋資源。',

    // 行動呼籲區
    'game.action.title': '我們可以做什麼？',
    'game.action.1': '減少一次性塑膠製品的使用，改用可重複使用的購物袋和水瓶',
    'game.action.2': '支持和購買來自永續漁業認證的海鮮產品',
    'game.action.3': '參與淨灘活動，直接清潔我們的沿海地區',
    'game.action.4': '提高環保意識，教育身邊的人關於海洋保育的重要性',
    'game.action.external.title': '更進一步的環保行動',
    'game.action.external.note': '* 以下兩項資源主要針對台灣在地環境與淨灘活動。',
    'game.action.iocean.title': '台灣海洋保育入口網',
    'game.action.iocean.desc': '海保署官方平台。了解全台保護區現況，或成為公民科學家回報海洋生物目擊紀錄。',
    'game.action.iocean.cta': '探索數據庫',
    'game.action.bbrally.title': 'bb減塑大集合',
    'game.action.bbrally.desc': '揪團參與各地的淨灘與淨街活動，從日常生活攔截角落的塑膠怪獸。',
    'game.action.bbrally.cta': '響應淨灘行動',
  },
  'en': {
    // Meta & Hero Section
    'game.meta.title': "Fishing Experience | A Fisherman's Perspective",
    'game.hero.title': 'Fishing Experience',
    'game.hero.desc': 'Step into the daily life of a fisherman and experience the thrill of casting a net. However, you will find that modern oceans are full of unexpected challenges...',

    // Canvas & Controls
    'game.canvas.prompt': 'Click to get ready to cast the net!',
    'game.canvas.readyAgain': 'Ready to cast again?',
    'game.btn.cast': 'Cast Net',
    'game.btn.tenDraw': 'Ten Draw',
    'game.btn.reset': 'Restart',

    // Stats Panel
    'game.stats.title': 'Statistics',
    'game.stats.castCount': 'Casts',
    'game.stats.fishCount': 'Fish Caught',
    'game.stats.trashCount': 'Trash Caught',
    'game.stats.successRate': 'Success Rate',
    'game.stats.probability': 'Chance of catching fish: 20%<br>Chance of catching trash: 80%',

    // Modals: Trash Info
    'game.panel.close': 'Close',
    'game.panel.trash.type': 'Trash Type',
    'game.panel.trash.timeLabel': 'Decomposition time in the ocean',
    'game.panel.trash.unknown': 'Unknown',
    'game.panel.trash.acknowledge': 'I understand',

    // Modals: Success
    'game.panel.success.title': 'Great Job!',
    'game.panel.success.desc': 'You successfully caught a fish, but remember, moderate harvesting is the key to sustainable fisheries.',
    'game.panel.success.continue': 'Continue',

    // Modals: Ten Draw
    'game.panel.tenDraw.kicker': 'Ten Draw',
    'game.panel.tenDraw.title': 'Ten Draw Results',
    'game.panel.tenDraw.desc': 'Click any item to view details',
    'game.tag.fish': 'Fish',
    'game.tag.trash': 'Trash',

    // Education Section
    'game.edu.title': 'Why is the ocean full of trash?',
    'game.edu.1.title': 'Land-based Pollution',
    'game.edu.1.desc': 'Urban and industrial waste flows into the ocean via rivers, becoming a major source of marine pollution. About 80% of marine debris comes from land.',
    'game.edu.2.title': 'Decomposition Time',
    'game.edu.2.desc': 'Plastic bags take up to 500 years to decompose, and fishing lines 600 years. Even the "easiest" items take decades. Many marine animals are injured as a result.',
    'game.edu.3.title': 'Ecological Threats',
    'game.edu.3.desc': 'Marine life mistakenly ingest or become entangled in trash, leading to injury or death. Promoting sustainable fisheries is crucial to protecting existing marine resources.',

    // Action Section
    'game.action.title': 'What can we do?',
    'game.action.1': 'Reduce single-use plastics and switch to reusable shopping bags and water bottles.',
    'game.action.2': 'Support and buy seafood from certified sustainable fisheries.',
    'game.action.3': 'Participate in beach cleanups to directly clean our coastal areas.',
    'game.action.4': 'Raise environmental awareness and educate those around you about the importance of marine conservation.',
    'game.action.external.title': 'Take Further Environmental Action',
    'game.action.external.note': '* Note: These platforms are Taiwan-based and primarily feature Traditional Chinese interfaces.',
    'game.action.iocean.title': 'Taiwan Ocean Conservation Portal',
    'game.action.iocean.desc': 'Official platform to explore marine protected areas or become a citizen scientist reporting marine life sightings.',
    'game.action.iocean.cta': 'Explore Database',
    'game.action.bbrally.title': 'BB Plastic Reduction Rally',
    'game.action.bbrally.desc': 'Join local beach and street cleanup activities to intercept plastic waste in your daily life.',
    'game.action.bbrally.cta': 'Join the Cleanup',

  },
  'ja': {
    // Meta 與 標題區
    'game.meta.title': '投網体験 | 漁師の視点から見る海洋保全',
    'game.hero.title': '投網体験',
    'game.hero.desc': '漁師の日常に足を踏み入れ、投網の興奮を体験してください。しかし、現代の海には予期せぬ課題が満ちていることに気づくでしょう...',

    // 遊戲畫布與控制區
    'game.canvas.prompt': 'クリックして網を打つ準備を！',
    'game.canvas.readyAgain': 'もう一度網を打つ準備はできましたか？',
    'game.btn.cast': '網を打つ',
    'game.btn.tenDraw': '10連投網',
    'game.btn.reset': 'リセット',

    // 統計面板
    'game.stats.title': '統計',
    'game.stats.castCount': '投網回数',
    'game.stats.fishCount': '捕獲した魚',
    'game.stats.trashCount': '引き揚げたゴミ',
    'game.stats.successRate': '成功率',
    'game.stats.probability': '魚が捕れる確率：20%<br>ゴミが引き揚げられる確率：80%',

    // 彈出視窗：垃圾資訊
    'game.panel.close': '閉じる',
    'game.panel.trash.type': 'ゴミの種類',
    'game.panel.trash.timeLabel': '海洋での分解にかかる時間',
    'game.panel.trash.unknown': '不明',
    'game.panel.trash.acknowledge': 'わかりました',

    // 彈出視窗：捕魚成功
    'game.panel.success.title': '素晴らしい！',
    'game.panel.success.desc': '見事、魚を捕まえることができました。しかし、持続可能な漁業の鍵は「適度な漁獲」であることを忘れないでください。',
    'game.panel.success.continue': '続ける',

    // 彈出視窗：十連抽
    'game.panel.tenDraw.kicker': 'Ten Draw',
    'game.panel.tenDraw.title': '10連投網の結果',
    'game.panel.tenDraw.desc': '項目をクリックすると詳細が表示されます',
    'game.tag.fish': '魚',
    'game.tag.trash': 'ゴミ',

    // 教育資訊區 (為什麼海洋中充滿垃圾)
    'game.edu.title': 'なぜ海にはゴミが溢れているのか？',
    'game.edu.1.title': '陸上からの汚染',
    'game.edu.1.desc': '都市や産業の廃棄物が川を通じて海へ流れ込み、海洋汚染の主な原因となっています。海洋ゴミの約80%は陸地から来ています。',
    'game.edu.2.title': '分解にかかる時間',
    'game.edu.2.desc': 'ビニール袋の分解には500年、釣り糸には600年かかり、最も「分解しやすい」ものでさえ数十年を要します。多くの海洋生物がこれにより傷ついています。',
    'game.edu.3.title': '生態系への脅威',
    'game.edu.3.desc': '海洋生物が誤って食べたり、絡まったりすることで怪我や死に至ります。既存の海洋資源を保護するためには、持続可能な漁業の推進が極めて重要です。',

    // 行動呼籲區
    'game.action.title': '私たちにできることは？',
    'game.action.1': '使い捨てプラスチック製品の使用を減らし、繰り返し使えるマイバッグやマイボトルに切り替える。',
    'game.action.2': '持続可能な漁業の認証を受けた水産物を支持し、購入する。',
    'game.action.3': 'ビーチクリーン活動に参加し、沿岸地域を直接清掃する。',
    'game.action.4': '環境への意識を高め、周りの人に海洋保全の重要性を伝える。',
    'game.action.external.title': 'さらに進んだ環境保護活動',
    'game.action.external.note': '* 注：これらのプラットフォームは台湾を拠点としており、主に繁体字中国語で提供されています。',
    'game.action.iocean.title': '台湾海洋保全ポータル',
    'game.action.iocean.desc': '海洋保護区の現状を学び、市民科学者として海洋生物の目撃情報を提供する公式プラットフォーム。',
    'game.action.iocean.cta': 'データベースを探索',
    'game.action.bbrally.title': 'BB 減プラスチック大集合',
    'game.action.bbrally.desc': '各地のビーチクリーンや清掃活動に参加し、日常生活からプラスチックゴミを減らしましょう。',
    'game.action.bbrally.cta': '活動に参加する',
  }// 預留給日文 
} as const;

export type GameKey = keyof typeof ui['zh-tw'];

const zhTrashItems = [
	{
		name: '塑膠袋',
		time: '500年',
		message: '塑膠袋是海洋污染的主要元凶之一。它們易被海洋生物誤食，造成窒息或腸道損傷。',
		variants: [
			{
				src: '/pngtree/fishing/plastic_bags.webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-12deg);',
			},
			{
				src: '/pngtree/fishing/plastic_bags.webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(10deg) scale(0.95);',
			},
			{
				src: '/pngtree/fishing/plastic_bags_2.webp',
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
				src: '/pngtree/fishing/straw.webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(14deg);',
			},
			{
				src: '/pngtree/fishing/straw.webp',
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
				src: '/pngtree/fishing/crushed_aluminum_can.webp',
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
				src: '/pngtree/fishing/canvas.webp',
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
				src: '/pngtree/fishing/tire_damaged.webp',
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
				src: '/pngtree/fishing/cigarette.webp',
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
				src: '/pngtree/fishing/Cotton_Shirt.webp',
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
				src: '/pngtree/fishing/Disposable_diapers.webp',
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
				src: '/pngtree/fishing/bottle.webp',
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
				src: '/pngtree/fishing/rope.webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
			},
			{
				src: '/pngtree/fishing/rope (2).webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
			},
		],
	},
	{
		name: '皮革 (Leather)',
		time: '50 年',
		message: '皮革製品在海中分解緩慢，染色與鞣製殘留物也可能影響水質。',
		variants: [
			{
				src: '/pngtree/fishing/belt.webp',
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
				src: '/pngtree/fishing/Orange_Peel.webp',
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
				src: '/pngtree/fishing/Painted_Wood.webp',
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
				src: '/pngtree/fishing/paper_sheet.webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
			},
			{
				src: '/pngtree/fishing/paper_sheet (2).webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
			},
		],
	},
	{
		name: '寶特瓶 (Plastic Bottle)',
		time: '500+ 年',
		message: '寶特瓶是常見海洋垃圾，會破碎成微塑膠並長期影響海洋食物網。',
		variants: [
			{
				src: '/pngtree/fishing/plastic_bottle.webp',
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
				src: '/pngtree/fishing/Polyester_Fabric.webp',
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
				src: '/pngtree/fishing/Polyurethane_Cushions.webp',
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
				src: '/pngtree/fishing/Sanitary_Pads_and_Tampons.webp',
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
				src: '/pngtree/fishing/thread.webp',
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
				src: '/pngtree/fishing/Vegetable_Waste.webp',
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
				src: '/pngtree/fishing/wet_wipe.webp',
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
				src: '/pngtree/fishing/wool.webp',
				className: 'w-20 h-20 object-contain',
				style: 'filter: saturate(0.58) brightness(0.86) contrast(0.9); transform: rotate(-13deg);',
			},
		],
	},
] as const;

export const enTrashItems = [
  {
    name: 'Plastic Bag',
    time: '500 Years',
    message: 'Plastic bags are a major culprit of marine pollution. They are easily swallowed by marine life, causing suffocation or intestinal damage.',
    variants: [
      {
        src: '/pngtree/fishing/plastic_bags.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-12deg);',
      },
      {
        src: '/pngtree/fishing/plastic_bags.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(10deg) scale(0.95);',
      },
      {
        src: '/pngtree/fishing/plastic_bags_2.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(20deg);',
      }
    ],
  },
  {
    name: 'Plastic Straw',
    time: '200 Years',
    message: 'Disposable straws contribute millions of tons of ocean waste annually, injuring many sea turtles and seabirds.',
    variants: [
      {
        src: '/pngtree/fishing/straw.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(14deg);',
      },
      {
        src: '/pngtree/fishing/straw.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.78) contrast(0.9); transform: rotate(-6deg) scale(1.03);',
      },
    ],
  },
  {
    name: 'Aluminum Can',
    time: '100+ Years',
    message: 'Aluminum cans take a very long time to decompose in the ocean. Recycling can significantly reduce coastal and seabed litter.',
    variants: [
      {
        src: '/pngtree/fishing/crushed_aluminum_can.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.8) contrast(0.9); transform: rotate(-10deg);',
      },
    ],
  },
  {
    name: 'Canvas',
    time: '1 Year',
    message: 'Although canvas is biodegradable, it can persist in seawater and low-oxygen environments for a long time, potentially entangling marine life.',
    variants: [
      {
        src: '/pngtree/fishing/canvas.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.78) contrast(0.9); transform: rotate(12deg);',
      },
    ],
  },
  {
    name: 'Car Tires',
    time: '2,000 Years',
    message: 'Car tires contain various synthetic materials that decompose extremely slowly. They may also release microplastics and harmful chemicals.',
    variants: [
      {
        src: '/pngtree/fishing/tire_damaged.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.45) brightness(0.74) contrast(0.95); transform: rotate(-2deg) scale(1.02);',
      },
    ],
  },
  {
    name: 'Cigarette Butts',
    time: '18 Months - 10+ Years',
    message: 'Cigarette filters are mostly made of plastic fibers that slowly break down into microplastics, harming fish and benthic organisms.',
    variants: [
      {
        src: '/pngtree/fishing/cigarette.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(6deg) scale(0.96);',
      },
    ],
  },
  {
    name: 'Cotton Shirt',
    time: '2 - 5 Months',
    message: 'Natural fibers decompose more easily, but if they contain dyeing chemicals, they can still burden the marine environment.',
    variants: [
      {
        src: '/pngtree/fishing/Cotton_Shirt.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.58) brightness(0.86) contrast(0.92); transform: rotate(-7deg);',
      },
    ],
  },
  {
    name: 'Disposable Diapers',
    time: '500 Years',
    message: 'Disposable diapers contain plastics and superabsorbent polymers. If they enter the ocean, they will persist for a long time and pollute habitats.',
    variants: [
      {
        src: '/pngtree/fishing/Disposable_diapers.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.54) brightness(0.8) contrast(0.9); transform: rotate(9deg);',
      },
    ],
  },
  {
    name: 'Glass Bottles',
    time: '1,000,000 Years',
    message: 'Glass hardly decomposes in the natural environment. Once broken, it can also injure marine life and humans.',
    variants: [
      {
        src: '/pngtree/fishing/bottle.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.48) brightness(0.76) contrast(0.95); transform: rotate(-4deg) scale(1.03);',
      },
    ],
  },
  {
    name: 'Hemp Ropes',
    time: '3 - 14 Months',
    message: 'Hemp ropes are biodegradable, but they can still entangle marine life. They must be properly disposed of to avoid being left in the sea.',
    variants: [
      {
        src: '/pngtree/fishing/rope.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
      },
      {
        src: '/pngtree/fishing/rope (2).webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
      },
    ],
  },
  {
    name: 'Leather',
    time: '50 Years',
    message: 'Leather products decompose slowly in the ocean. Residues from dyes and tanning processes can also affect water quality.',
    variants: [
      {
        src: '/pngtree/fishing/belt.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.46) brightness(0.74) contrast(0.94); transform: rotate(-5deg);',
      },
    ],
  },
  {
    name: 'Orange Peel',
    time: '6 Months',
    message: 'Even food waste should not be randomly discarded in the ocean. The decomposition process can disrupt the local ecological balance.',
    variants: [
      {
        src: '/pngtree/fishing/Orange_Peel.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.6) brightness(0.88) contrast(0.9); transform: rotate(-8deg);',
      },
    ],
  },
  {
    name: 'Painted Wood',
    time: '13+ Years',
    message: 'Painted wood not only takes a long time to decompose, but the chemicals in the paint can also leach into the seawater.',
    variants: [
      {
        src: '/pngtree/fishing/Painted_Wood.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.44) brightness(0.76) contrast(0.96); transform: rotate(15deg);',
      },
    ],
  },
  {
    name: 'Paper',
    time: '2 - 5 Months',
    message: 'Paper is relatively easy to decompose, but discarding it in large quantities will still cause coastal litter and local ecological stress.',
    variants: [
      {
        src: '/pngtree/fishing/paper_sheet.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
      },
      {
        src: '/pngtree/fishing/paper_sheet (2).webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
      },
    ],
  },
  {
    name: 'Plastic Bottle',
    time: '500+ Years',
    message: 'Plastic bottles are common marine debris. They break down into microplastics and have long-term impacts on the marine food web.',
    variants: [
      {
        src: '/pngtree/fishing/plastic_bottle.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-17deg);',
      },
    ],
  },
  {
    name: 'Polyester Fabric',
    time: '100+ Years',
    message: 'Polyester is a plastic material. It persists in the environment for a long time and releases microplastic fibers when rubbed.',
    variants: [
      {
        src: '/pngtree/fishing/Polyester_Fabric.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.8) contrast(0.9); transform: rotate(13deg) scale(1.01);',
      },
    ],
  },
  {
    name: 'Polyurethane Cushions',
    time: '1,000 Years',
    message: 'Polyurethane foam decomposes extremely slowly. Once fragmented, it can be mistakenly eaten by fish and accumulate in their bodies.',
    variants: [
      {
        src: '/pngtree/fishing/Polyurethane_Cushions.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.48) brightness(0.76) contrast(0.9); transform: rotate(-4deg) scale(1.04);',
      },
    ],
  },
  {
    name: 'Sanitary Pads and Tampons',
    time: '25+ Years',
    message: 'Hygiene products often contain plastics and absorbent materials. Entering the ocean causes long-term pollution and entanglement risks.',
    variants: [
      {
        src: '/pngtree/fishing/Sanitary_Pads_and_Tampons.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.56) brightness(0.84) contrast(0.9); transform: rotate(-9deg);',
      },
    ],
  },
  {
    name: 'Thread',
    time: '3 - 4 Months',
    message: 'Thin threads may seem inconspicuous, but they can still entangle small marine life, making it difficult for them to move and forage.',
    variants: [
      {
        src: '/pngtree/fishing/thread.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.54) brightness(0.84) contrast(0.88); transform: rotate(22deg) scale(0.93);',
      },
    ],
  },
  {
    name: 'Vegetable Waste',
    time: '5 Days - 1 Month',
    message: 'Organic waste decomposes relatively quickly, but accumulating in large amounts will still deplete oxygen and damage the local marine ecosystem.',
    variants: [
      {
        src: '/pngtree/fishing/Vegetable_Waste.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.66) brightness(0.9) contrast(0.86); transform: rotate(-3deg);',
      },
    ],
  },
  {
    name: 'Wet Wipes',
    time: '100+ Years',
    message: 'Most wet wipes contain plastic fibers and are difficult to decompose. They often accumulate in coastal areas and drainage systems for a long time.',
    variants: [
      {
        src: '/pngtree/fishing/wet_wipe.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.54) brightness(0.82) contrast(0.9); transform: rotate(5deg) scale(1.02);',
      },
    ],
  },
  {
    name: 'Wool',
    time: '1 - 5 Years',
    message: 'Wool decomposes naturally, but if blended with synthetic fibers or dyes, it will still increase the environmental burden.',
    variants: [
      {
        src: '/pngtree/fishing/wool.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.58) brightness(0.86) contrast(0.9); transform: rotate(-13deg);',
      },
    ],
  },
] as const;

export const jaTrashItems = [
  {
    name: 'ビニール袋',
    time: '500年',
    message: 'ビニール袋は海洋汚染の主な原因の一つです。海洋生物が誤って飲み込みやすく、窒息や腸の損傷を引き起こします。',
    variants: [
      {
        src: '/pngtree/fishing/plastic_bags.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-12deg);',
      },
      {
        src: '/pngtree/fishing/plastic_bags.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(10deg) scale(0.95);',
      },
      {
        src: '/pngtree/fishing/plastic_bags_2.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(20deg);',
      }
    ],
  },
  {
    name: 'ストロー',
    time: '200年',
    message: '使い捨てストローは毎年数百万トンの海洋ゴミを生み出しています。これにより多くのウミガメや野鳥が傷ついています。',
    variants: [
      {
        src: '/pngtree/fishing/straw.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(14deg);',
      },
      {
        src: '/pngtree/fishing/straw.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.78) contrast(0.9); transform: rotate(-6deg) scale(1.03);',
      },
    ],
  },
  {
    name: 'アルミ缶',
    time: '100年以上',
    message: 'アルミ缶は海洋環境で分解されるのに非常に長い時間がかかります。リサイクルすることで、海岸や海底のゴミを大幅に減らすことができます。',
    variants: [
      {
        src: '/pngtree/fishing/crushed_aluminum_can.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.8) contrast(0.9); transform: rotate(-10deg);',
      },
    ],
  },
  {
    name: 'キャンバス生地',
    time: '1年',
    message: 'キャンバス生地は分解可能ですが、海水や低酸素環境では長期間残り、海洋生物に絡まる可能性があります。',
    variants: [
      {
        src: '/pngtree/fishing/canvas.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.78) contrast(0.9); transform: rotate(12deg);',
      },
    ],
  },
  {
    name: '自動車のタイヤ',
    time: '2,000年',
    message: '自動車のタイヤには多様な合成素材が含まれており、分解が極めて遅いです。また、マイクロプラスチックや有害な化学物質を放出する可能性もあります。',
    variants: [
      {
        src: '/pngtree/fishing/tire_damaged.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.45) brightness(0.74) contrast(0.95); transform: rotate(-2deg) scale(1.02);',
      },
    ],
  },
  {
    name: 'タバコの吸い殻',
    time: '18ヶ月 - 10年以上',
    message: 'タバコのフィルターは主にプラスチック繊維でできており、ゆっくりとマイクロプラスチックに砕け、魚や底生生物に害を及ぼします。',
    variants: [
      {
        src: '/pngtree/fishing/cigarette.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.5) brightness(0.8) contrast(0.9); transform: rotate(6deg) scale(0.96);',
      },
    ],
  },
  {
    name: '綿のシャツ',
    time: '2 - 5ヶ月',
    message: '天然繊維は比較的分解しやすいですが、染料の化学物質が含まれている場合、海洋環境に負担をかける可能性があります。',
    variants: [
      {
        src: '/pngtree/fishing/Cotton_Shirt.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.58) brightness(0.86) contrast(0.92); transform: rotate(-7deg);',
      },
    ],
  },
  {
    name: '使い捨ておむつ',
    time: '500年',
    message: '使い捨ておむつにはプラスチックや高分子吸収体が含まれています。海に流れ込むと長期間残り、生息地を汚染します。',
    variants: [
      {
        src: '/pngtree/fishing/Disposable_diapers.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.54) brightness(0.8) contrast(0.9); transform: rotate(9deg);',
      },
    ],
  },
  {
    name: 'ガラス瓶',
    time: '100万年',
    message: 'ガラスは自然環境ではほとんど分解されません。割れると、海洋生物や人間を傷つける危険性もあります。',
    variants: [
      {
        src: '/pngtree/fishing/bottle.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.48) brightness(0.76) contrast(0.95); transform: rotate(-4deg) scale(1.03);',
      },
    ],
  },
  {
    name: '麻縄',
    time: '3 - 14ヶ月',
    message: '麻縄は分解可能ですが、海中では生物に絡まる危険があります。海に放置しないよう適切な処理が必要です。',
    variants: [
      {
        src: '/pngtree/fishing/rope.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
      },
      {
        src: '/pngtree/fishing/rope (2).webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.82) contrast(0.9); transform: rotate(18deg);',
      },
    ],
  },
  {
    name: '皮革',
    time: '50年',
    message: '革製品は海中での分解が遅く、染料やなめし工程の残留物が水質に影響を与える可能性もあります。',
    variants: [
      {
        src: '/pngtree/fishing/belt.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.46) brightness(0.74) contrast(0.94); transform: rotate(-5deg);',
      },
    ],
  },
  {
    name: 'みかんの皮',
    time: '6ヶ月',
    message: '生ゴミであっても、海にむやみに捨てるべきではありません。分解過程でその地域の生態系バランスを崩す可能性があります。',
    variants: [
      {
        src: '/pngtree/fishing/Orange_Peel.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.6) brightness(0.88) contrast(0.9); transform: rotate(-8deg);',
      },
    ],
  },
  {
    name: '塗装された木材',
    time: '13年以上',
    message: '塗装された木材は分解に時間がかかるだけでなく、塗料に含まれる化学物質が海水に溶け出す可能性があります。',
    variants: [
      {
        src: '/pngtree/fishing/Painted_Wood.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.44) brightness(0.76) contrast(0.96); transform: rotate(15deg);',
      },
    ],
  },
  {
    name: '紙',
    time: '2 - 5ヶ月',
    message: '紙は比較的分解しやすいですが、大量に捨てられると海岸の景観を損ない、局地的な生態系へのストレスとなります。',
    variants: [
      {
        src: '/pngtree/fishing/paper_sheet.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
      },
      {
        src: '/pngtree/fishing/paper_sheet (2).webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.62) brightness(0.9) contrast(0.9); transform: rotate(-11deg);',
      },
    ],
  },
  {
    name: 'ペットボトル',
    time: '500年以上',
    message: 'ペットボトルはよく見られる海洋ゴミです。砕けてマイクロプラスチックになり、海洋の食物網に長期的な悪影響を及ぼします。',
    variants: [
      {
        src: '/pngtree/fishing/plastic_bottle.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.55) brightness(0.82) contrast(0.92); transform: rotate(-17deg);',
      },
    ],
  },
  {
    name: 'ポリエステル生地',
    time: '100年以上',
    message: 'ポリエステルはプラスチック素材です。長期間環境に残り、摩擦によりマイクロプラスチック繊維を放出します。',
    variants: [
      {
        src: '/pngtree/fishing/Polyester_Fabric.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.52) brightness(0.8) contrast(0.9); transform: rotate(13deg) scale(1.01);',
      },
    ],
  },
  {
    name: 'ポリウレタン製クッション',
    time: '1,000年',
    message: 'ポリウレタンフォームは分解が極めて遅いです。砕けた後は魚に誤食され、体内に蓄積する可能性があります。',
    variants: [
      {
        src: '/pngtree/fishing/Polyurethane_Cushions.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.48) brightness(0.76) contrast(0.9); transform: rotate(-4deg) scale(1.04);',
      },
    ],
  },
  {
    name: '生理用ナプキンとタンポン',
    time: '25年以上',
    message: '衛生用品にはプラスチックや吸収材が含まれていることが多く、海に入ると長期的な汚染や絡まりの危険をもたらします。',
    variants: [
      {
        src: '/pngtree/fishing/Sanitary_Pads_and_Tampons.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.56) brightness(0.84) contrast(0.9); transform: rotate(-9deg);',
      },
    ],
  },
  {
    name: '糸',
    time: '3 - 4ヶ月',
    message: '細い糸は目立たないように見えますが、小型の海洋生物に絡まり、移動や摂食を困難にする可能性があります。',
    variants: [
      {
        src: '/pngtree/fishing/thread.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.54) brightness(0.84) contrast(0.88); transform: rotate(22deg) scale(0.93);',
      },
    ],
  },
  {
    name: '野菜のくず',
    time: '5日 - 1ヶ月',
    message: '有機廃棄物は比較的早く分解されますが、大量に堆積すると酸素を消費し、局地的な海洋生態系を破壊します。',
    variants: [
      {
        src: '/pngtree/fishing/Vegetable_Waste.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.66) brightness(0.9) contrast(0.86); transform: rotate(-3deg);',
      },
    ],
  },
  {
    name: 'ウェットティッシュ',
    time: '100年以上',
    message: '多くのウェットティッシュにはプラスチック繊維が含まれており、分解されにくいです。海岸や排水システムに長期間蓄積することがよくあります。',
    variants: [
      {
        src: '/pngtree/fishing/wet_wipe.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.54) brightness(0.82) contrast(0.9); transform: rotate(5deg) scale(1.02);',
      },
    ],
  },
  {
    name: 'ウール（羊毛）',
    time: '1 - 5年',
    message: 'ウールは自然に分解されますが、合成繊維や染料が混ざっていると、環境への負担が増加します。',
    variants: [
      {
        src: '/pngtree/fishing/wool.webp',
        className: 'w-20 h-20 object-contain',
        style: 'filter: saturate(0.58) brightness(0.86) contrast(0.9); transform: rotate(-13deg);',
      },
    ],
  },
] as const;

export const trashItems = {
	'zh-tw': zhTrashItems,
	'en': enTrashItems,
	'ja': jaTrashItems,
} as const;

export type TrashItem = (typeof trashItems)['zh-tw'][number];

export function getTrashItems(locale?: string) {
	const normalized = locale?.toLowerCase();
	const loc: Locale = normalized === 'en' || normalized === 'ja' ? normalized : 'zh-tw';
	return trashItems[loc] || trashItems['zh-tw'];
}

export function t(key: GameKey, locale?: string) {
    const normalized = locale?.toLowerCase();
    const loc: Locale = (normalized === 'en' || normalized === 'ja') ? normalized : 'zh-tw';
    
    const translation = (ui[loc] as any)[key] || (ui['zh-tw'] as any)[key];
    return translation || key;
}

export function getAllKeys() {
    return Object.keys(ui['zh-tw']) as GameKey[];
}