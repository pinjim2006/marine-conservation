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
  },
  'en': {
    // Meta & Hero Section
    'game.meta.title': "Fishing Experience | A Fisherman's Perspective",
    'game.hero.title': 'Fishing Experience',
    'game.hero.desc': 'Step into the daily life of a fisherman and experience the thrill of casting a net. However, you will find that modern oceans are full of unexpected challenges...',

    // Canvas & Controls
    'game.canvas.prompt': 'Click to get ready to cast the net!',
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
  },
  'ja': {
    // Meta 與 標題區
    'game.meta.title': '投網体験 | 漁師の視点から見る海洋保全',
    'game.hero.title': '投網体験',
    'game.hero.desc': '漁師の日常に足を踏み入れ、投網の興奮を体験してください。しかし、現代の海には予期せぬ課題が満ちていることに気づくでしょう...',

    // 遊戲畫布與控制區
    'game.canvas.prompt': 'クリックして網を打つ準備を！',
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
  }// 預留給日文 
} as const;

export type GameKey = keyof typeof ui['zh-tw'];

export function t(key: GameKey, locale?: string) {
    const normalized = locale?.toLowerCase();
    const loc: Locale = (normalized === 'en' || normalized === 'ja') ? normalized : 'zh-tw';
    
    const translation = (ui[loc] as any)[key] || (ui['zh-tw'] as any)[key];
    return translation || key;
}

export function getAllKeys() {
    return Object.keys(ui['zh-tw']) as GameKey[];
}