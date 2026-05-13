export type indexKey =
  | 'home.meta.title'| 'home.hero.title'| 'home.hero.desc'| 'home.reality.kicker'| 'home.reality.title'
  | 'home.reality.desc'| 'home.reality.1.title'  | 'home.reality.1.desc'  | 'home.reality.2.title'
  | 'home.reality.2.desc'  | 'home.reality.3.title'  | 'home.reality.3.desc'  | 'home.action.kicker'  | 'home.action.title'
  | 'home.action.desc'  | 'home.action.list.title'  | 'home.action.list.1'  | 'home.action.list.2'  | 'home.action.list.3'
  | 'home.news.kicker'  | 'home.news.title'  | 'home.news.desc';

// src/i18n/index.ts

type Locale = 'zh-tw' | 'en' | 'ja';

export const ui = {
  'zh-tw': {
    'nav.story': '漁夫的故事',
    'nav.sdg': '關於 SDG 14',
    'nav.news': '相關新聞',
    'general.scrollDown': '向下捲動',
    'home.meta.title': '漁夫視角的海洋保育 | 首頁',
    'home.hero.title': "A Fisherman's Perspective",
    'home.hero.desc': '海洋曾經養活了我的家人，但現在，<br>每一次撒網，我都在恐懼會撈起什麼...',
    'home.reality.kicker': 'Ocean Reality',
    'home.reality.title': '海面看似平靜<br>海底其實正在快速失衡',
    'home.reality.desc': '塑膠微粒、過度捕撈與海水升溫，正在同時改變漁獲結構。很多老漁民說，近十年捕到的魚「越來越小、越來越少、越來越不穩定」。',
    'home.reality.1.title': '近岸魚群減少',
    'home.reality.1.desc': '沿岸魚種密度下降，漁船需要花更多油錢跑得更遠，作業時間也更長。',
    'home.reality.2.title': '混獲與廢棄物增加',
    'home.reality.2.desc': '漁網帶回更多非目標生物與塑膠垃圾，傷害生態也壓縮了漁民收益。',
    'home.reality.3.title': '生計不確定性上升',
    'home.reality.3.desc': '漁季變短、魚價波動變大，讓年輕世代更難投入，也讓地方文化逐步流失。',
    'home.action.kicker': 'What You Can Do',
    'home.action.title': '從今天開始<br>讓海洋恢復呼吸',
    'home.action.desc': '海洋保育不只是一個口號，而是每次選擇累積出來的結果。理解故事、參與行動、擴散影響力，都是改變的一部分。',
    'home.action.list.title': '本週行動清單',
    'home.action.list.1': '減少一次性塑膠製品，尤其是吸管與餐具。',
    'home.action.list.2': '支持永續漁業標章商品，讓市場反映生態價值。',
    'home.action.list.3': '轉發可信新聞與資料，提升身邊人的海洋意識。',
    'home.news.kicker': 'Latest News',
    'home.news.title': '把海洋新聞變成採取行動的資訊',
    'home.news.desc': '整理最新的海洋保育與漁業新聞，讓你快速掌握政策、環境與生態變化。',
  },
  'en': {
    'nav.story': 'The Story',
    'nav.sdg': 'About SDG 14',
    'nav.news': 'News',
    'general.scrollDown': 'Scroll Down',
    'home.meta.title': "A Fisherman's Perspective | Home",
    'home.hero.title': "A Fisherman's Perspective",
    'home.hero.desc': 'The ocean used to feed my family, but now,<br>with every cast of the net, I fear what I might pull up...',
    'home.reality.kicker': 'Ocean Reality',
    'home.reality.title': 'Calm on the Surface,<br>Collapsing Below',
    'home.reality.desc': 'Microplastics, overfishing, and warming waters are changing the catch structure simultaneously.',
    'home.reality.1.title': 'Decline in Coastal Fish Populations',
    'home.reality.1.desc': 'Coastal fish density is dropping, forcing fishing boats to spend more on fuel.',
    'home.reality.2.title': 'Increase in Bycatch and Debris',
    'home.reality.2.desc': 'Nets bring back more non-target marine life and plastic waste...',
    'home.reality.3.title': 'Rising Livelihood Uncertainty',
    'home.reality.3.desc': 'Shorter fishing seasons and volatile fish prices make it harder for younger generations.',
    'home.action.kicker': 'What You Can Do',
    'home.action.title': 'Start Today,<br>Let the Ocean Breathe Again',
    'home.action.desc': 'Marine conservation is not just a slogan; it is the result of every choice we make. Understanding the story, taking action, and spreading the word are all part of the change.',
    'home.action.list.title': 'This Week\'s Action List',
    'home.action.list.1': 'Reduce single-use plastics, especially straws and utensils.',
    'home.action.list.2': 'Support certified sustainable seafood.',
    'home.action.list.3': 'Share credible news and data.',
    'home.news.kicker': 'Latest News',
    'home.news.title': 'Turn Ocean News into Actionable Information',
    'home.news.desc': 'Curated latest marine conservation and fisheries news.',
  },
  'ja': {
    'nav.story': '漁師の物語',
    'nav.sdg': 'SDG 14について',
    'nav.news': '関連ニュース',

    'general.scrollDown': '下にスクロール',

    'home.meta.title': '漁師の視点から見る海洋保護 | ホーム',

    'home.hero.title': "A Fisherman's Perspective",
    'home.hero.desc': '海はかつて私の家族を支えてくれた。<br>しかし今では、網を投げるたびに、何が引き上がるのか恐れている…。',

    'home.reality.kicker': 'Ocean Reality',
    'home.reality.title': '海面は穏やかに見えても<br>海の中では急速にバランスが崩れている',
    'home.reality.desc': 'マイクロプラスチック、乱獲、海水温の上昇が同時に漁獲の構造を変えています。多くのベテラン漁師は、この10年で「魚がどんどん小さく、少なく、不安定になっている」と語っています。',

    'home.reality.1.title': '沿岸の魚群減少',
    'home.reality.1.desc': '沿岸部の魚の密度が低下し、漁船はより遠くまで行かなければならず、燃料費や作業時間も増えています。',

    'home.reality.2.title': '混獲と廃棄物の増加',
    'home.reality.2.desc': '漁網には目的外の生物やプラスチックごみが以前より多くかかり、生態系への被害だけでなく、漁師の収入も圧迫しています。',

    'home.reality.3.title': '生計の不安定化',
    'home.reality.3.desc': '漁期の短縮や魚価の変動拡大により、若い世代が漁業に参入しにくくなり、地域文化も徐々に失われつつあります。',

    'home.action.kicker': 'What You Can Do',
    'home.action.title': '今日から始めよう<br>海に再び呼吸を取り戻すために',
    'home.action.desc': '海洋保護は単なるスローガンではなく、一つひとつの選択の積み重ねです。物語を知り、行動に参加し、影響を広げることは、すべて変化の一部になります。',

    'home.action.list.title': '今週のアクションリスト',
    'home.action.list.1': '特にストローや使い捨て食器など、使い捨てプラスチック製品を減らす。',
    'home.action.list.2': '持続可能な漁業認証の商品を選び、市場に生態系の価値を反映させる。',
    'home.action.list.3': '信頼できるニュースや資料を共有し、周囲の人々の海洋意識を高める。',

    'home.news.kicker': 'Latest News',
    'home.news.title': '海洋ニュースを行動につながる情報へ',
    'home.news.desc': '最新の海洋保護や漁業に関するニュースを整理し、政策・環境・生態系の変化を素早く把握できるようにします。',
  }
} as const;

// 🌟 魔法在這裡：自動將 zh-tw 裡所有的 key 抓出來變成型別
export type IndexKey = keyof typeof ui['zh-tw'];

 // 🌟 安全防呆版的 t 函式 (跟你的 sdg.ts 邏輯一樣)
export function t(key: IndexKey, locale?: string) {
    const normalized = locale?.toLowerCase();
    const loc: Locale = normalized === 'en' || normalized === 'ja' ? normalized : 'zh-tw';
    const translation = (ui[loc] as any)[key] || (ui['zh-tw'] as any)[key];
    return translation || key;
}

export function getAllKeys() {
    return Object.keys(ui['zh-tw']) as IndexKey[];
}