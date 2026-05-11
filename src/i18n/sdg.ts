export type SDGKey = 
    | 'sdg.hero.kicker' | 'sdg.hero.title' | 'sdg.hero.desc'
    | 'sdg.why.title' | 'sdg.why.1.title' | 'sdg.why.1.desc' | 'sdg.why.2.title' | 'sdg.why.2.desc' | 'sdg.why.3.title' | 'sdg.why.3.desc'
    | 'sdg.targets.title' | 'sdg.targets.instructions'
    | 'sdg.participate.title' | 'sdg.participate.1' | 'sdg.participate.2' | 'sdg.participate.3' | 'sdg.participate.4' | 'sdg.cta.news'
    | 'sdg.target.14.title' | 'sdg.target.14.desc'
    | 'sdg.target.14.1.title' | 'sdg.target.14.1.desc'
    | 'sdg.target.14.2.title' | 'sdg.target.14.2.desc'
    | 'sdg.target.14.3.title' | 'sdg.target.14.3.desc'
    | 'sdg.target.14.4.title' | 'sdg.target.14.4.desc'
    | 'sdg.target.14.5.title' | 'sdg.target.14.5.desc'
    | 'sdg.target.14.6.title' | 'sdg.target.14.6.desc'
    | 'sdg.target.14.7.title' | 'sdg.target.14.7.desc'
    | 'sdg.target.14.a.title' | 'sdg.target.14.a.desc'
    | 'sdg.target.14.b.title' | 'sdg.target.14.b.desc'
    | 'sdg.target.14.c.title' | 'sdg.target.14.c.desc'

const translations: Record<string, Record<SDGKey, string>> = {
    'zh-tw': {
        'sdg.hero.kicker': 'Sustainable Development Goals',
        'sdg.hero.title': 'SDG 14：永續海洋與保育',
        'sdg.hero.desc': 'SDG 14 是聯合國永續發展目標中，專注於海洋生態的重要目標。它希望透過減少污染、保護生態系、強化漁業管理與國際合作，讓海洋資源能被長期、永續地使用，並保障依賴海洋維生的社群。',
        'sdg.why.title': '為什麼 SDG 14 很重要？',
        'sdg.why.1.title': '守護生物多樣性',
        'sdg.why.1.desc': '海洋是數百萬物種的棲地，健康的海洋可以維持食物鏈平衡，避免生態系崩解。',
        'sdg.why.2.title': '維繫人類生活',
        'sdg.why.2.desc': '全球許多人依靠漁業與沿海經濟生存，海洋資源穩定與否直接影響工作與糧食安全。',
        'sdg.why.3.title': '對抗氣候變遷',
        'sdg.why.3.desc': '海洋吸收大量二氧化碳與熱能，保護海洋其實也是在提升地球面對氣候危機的韌性。',
        'sdg.targets.title': 'SDG 14 十個目標翻頁卡片',
        'sdg.targets.instructions': '將游標移到卡片上，或在手機上長按卡片，即可翻面閱讀完整目標內容。',
        'sdg.participate.title': '我們可以怎麼參與？',
        'sdg.participate.1': '減少一次性塑膠使用，特別是容易流入海洋的包材與用品。',
        'sdg.participate.2': '支持來源透明、符合永續漁業原則的海鮮產品。',
        'sdg.participate.3': '關注海洋議題新聞，將正確資訊分享給身邊的人。',
        'sdg.participate.4': '參與淨灘、倡議或教育活動，讓保育成為日常行動。',
        'sdg.cta.news': '查看相關新聞',
        'sdg.target.14.title': 'SDG 14：永續海洋與保育',
        'sdg.target.14.desc': 'SDG 14 是聯合國永續發展目標中，專注於海洋生態的重要目標。它希望透過減少污染、保護生態系、強化漁業管理與國際合作，讓海洋資源能被長期、永續地使用，並保障依賴海洋維生的社群。',
        'sdg.target.14.1.title': '減少海洋污染',
        'sdg.target.14.1.desc': '在西元 2025 年以前，預防及大幅減少各式各樣的海洋污染，尤其是來自陸上活動的污染，包括海洋廢棄物以及營養污染。',
        'sdg.target.14.2.title': '保護和恢復生態系統',
        'sdg.target.14.2.desc': '在西元 2020 年以前，以可永續的方式管理及保護海洋與海岸生態，避免重大的不利影響，作法包括強健其災後復原能力，並採取復原動作，以實現健康又具有生產力的海洋。',
        'sdg.target.14.3.title': '減少海洋酸化',
        'sdg.target.14.3.desc': '減少並解決海洋酸化的影響，作法包括改善所有階層的科學合作。',
        'sdg.target.14.4.title': '永續漁業',
        'sdg.target.14.4.desc': '在西元 2020 年以前，有效監管採收，消除過度漁撈，以及非法的、未報告的、未受監管的（IUU）或毀滅性魚撈作法，並實施科學管理計畫，在最短時間內將魚量恢復到可產生最大永續發展的水準。',
        'sdg.target.14.5.title': '保護沿海和海洋地區',
        'sdg.target.14.5.desc': '在西元 2020 年以前，依照國家與國際法規，以及可取得的最佳科學資訊，保護至少 10% 的海岸與海洋區。',
        'sdg.target.14.6.title': '終止導致過度捕撈的補貼',
        'sdg.target.14.6.desc': '在西元 2020 年以前，禁止會造成過度魚撈的補助，消除會助長 IUU 魚撈的補助，並禁止引入這類補助；同時承認對開發中國家與最低度開發國家的特別與差別待遇應納入世界貿易組織漁撈補助協定。',
        'sdg.target.14.7.title': '提高海洋資源永續利用的經濟效益',
        'sdg.target.14.7.desc': '在西元 2030 年以前，提高海洋資源永續使用對 SIDS 與 LDCs 的經濟好處，作法包括永續管理漁撈業、水產養殖業與觀光業。',
        'sdg.target.14.a.title': '增加海洋健康方面的科學知識、研究和科技',
        'sdg.target.14.a.desc': '提高科學知識，發展研究能力，轉移海洋科技，參考跨政府海洋委員會的海洋科技轉移準則，以改善海洋健康，並促進海洋生物多樣性對開發中國家的發展貢獻，特別是 SIDS 與 LDCs。',
        'sdg.target.14.b.title': '支持小型漁民',
        'sdg.target.14.b.desc': '提供小規模人工魚撈業者取得海洋資源與進入市場的管道。',
        'sdg.target.14.c.title': '執行和落實國際海洋法',
        'sdg.target.14.c.desc': '確保聯合國海洋法公約（UNCLOS）簽約國全面落實國際法，包括現有的區域與國際制度，以保護及永續使用海洋及海洋資源。',
    },
    en: {
        'sdg.hero.kicker': 'Sustainable Development Goals',
        'sdg.hero.title': 'SDG 14: Life Below Water',
        'sdg.hero.desc': 'SDG 14 is a key United Nations goal focused on marine ecosystems. It aims to reduce pollution, protect ecosystems, strengthen fisheries management, and support international cooperation so ocean resources can be used sustainably over the long term.',
        'sdg.why.title': 'Why is SDG 14 important?',
        'sdg.why.1.title': 'Protecting biodiversity',
        'sdg.why.1.desc': 'The ocean is home to millions of species. A healthy ocean keeps food webs balanced and prevents ecosystem collapse.',
        'sdg.why.2.title': 'Sustaining human livelihoods',
        'sdg.why.2.desc': 'Millions of people rely on fisheries and coastal economies. The stability of ocean resources directly affects work and food security.',
        'sdg.why.3.title': 'Fighting climate change',
        'sdg.why.3.desc': 'The ocean absorbs large amounts of carbon dioxide and heat, so protecting it also strengthens the planet’s resilience to climate crises.',
        'sdg.targets.title': 'SDG 14 target flip cards',
        'sdg.targets.instructions': 'Hover over a card, or long-press on mobile, to flip it and read the full target description.',
        'sdg.participate.title': 'How can we take part?',
        'sdg.participate.1': 'Reduce single-use plastics, especially packaging and items that can easily reach the ocean.',
        'sdg.participate.2': 'Support seafood products with transparent sourcing and sustainable fishing practices.',
        'sdg.participate.3': 'Follow marine news and share accurate information with the people around you.',
        'sdg.participate.4': 'Join beach cleanups, advocacy, or education activities and make conservation part of daily life.',
        'sdg.cta.news': 'View related news',
        'sdg.target.14.title': 'SDG 14: Sustainable Oceans and Conservation',
        'sdg.target.14.desc': 'SDG 14 is a key United Nations goal focused on marine ecosystems. It aims to reduce pollution, protect ecosystems, strengthen fisheries management, and support international cooperation so ocean resources can be used sustainably over the long term.',
        'sdg.target.14.1.title': 'Reduce marine pollution',
        'sdg.target.14.1.desc': 'By 2025, prevent and significantly reduce all kinds of marine pollution, especially pollution from land-based activities, including marine debris and nutrient pollution.',
        'sdg.target.14.2.title': 'Protect and restore ecosystems',
        'sdg.target.14.2.desc': 'By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including strengthening resilience and taking restoration action for healthy, productive oceans.',
        'sdg.target.14.3.title': 'Reduce ocean acidification',
        'sdg.target.14.3.desc': 'Minimize and address the impacts of ocean acidification, including through improved scientific cooperation at all levels.',
        'sdg.target.14.4.title': 'Sustainable fisheries',
        'sdg.target.14.4.desc': 'By 2020, effectively regulate harvesting, end overfishing and illegal, unreported and unregulated (IUU) or destructive fishing practices, and implement science-based management plans to restore fish stocks as quickly as possible to levels that can produce maximum sustainable yield.',
        'sdg.target.14.5.title': 'Conserve coastal and marine areas',
        'sdg.target.14.5.desc': 'By 2020, conserve at least 10% of coastal and marine areas in line with national and international law and the best available scientific information.',
        'sdg.target.14.6.title': 'End harmful fishing subsidies',
        'sdg.target.14.6.desc': 'By 2020, prohibit subsidies that contribute to overfishing, eliminate subsidies that support IUU fishing, and refrain from introducing such subsidies, while recognizing that special and differential treatment for developing countries and least developed countries should be an integral part of the WTO fisheries subsidies agreement.',
        'sdg.target.14.7.title': 'Increase economic benefits from sustainable use of marine resources',
        'sdg.target.14.7.desc': 'By 2030, increase the economic benefits to SIDS and LDCs from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture, and tourism.',
        'sdg.target.14.a.title': 'Increase scientific knowledge, research, and technology for ocean health',
        'sdg.target.14.a.desc': 'Increase scientific knowledge, develop research capacity, and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission criteria, to improve ocean health and strengthen the development contributions of marine biodiversity to developing countries, especially SIDS and LDCs.',
        'sdg.target.14.b.title': 'Support small-scale fishers',
        'sdg.target.14.b.desc': 'Provide access for small-scale artisanal fishers to marine resources and markets.',
        'sdg.target.14.c.title': 'Implement international ocean law',
        'sdg.target.14.c.desc': 'Ensure the full implementation of international law by states parties to the United Nations Convention on the Law of the Sea, including existing regional and international regimes, to conserve and sustainably use oceans and marine resources.',
    },
};

export function t(key: SDGKey, locale?: string) {
    const loc = locale?.toLowerCase() === 'en' ? 'en' : 'zh-tw';
    return translations[loc]?.[key] ?? translations['zh-tw'][key] ?? key;
}

export function getAllKeys() {
    return Object.keys(translations['zh-tw']) as SDGKey[];
}