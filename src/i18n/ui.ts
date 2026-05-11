// Simple UI translation helper for site strings
export type UIKey =
	| 'nav.home'
	| 'nav.story'
	| 'nav.game'
	| 'nav.news'
	| 'nav.sdg'
	| 'cta.join'
	| 'news.readMore'
	| 'news.latest'
	| 'news.back'
	| 'general.scrollDown';

const translations: Record<string, Record<UIKey, string>> = {
	'zh-tw': {
		'nav.home': '首頁',
		'nav.story': '漁夫的故事',
		'nav.game': '撒網體驗',
		'nav.news': '相關新聞',
		'nav.sdg': '關於 SDG 14',
		'cta.join': '加入行動',
		'news.readMore': '閱讀全文',
		'news.latest': '最新消息',
		'news.back': '回到新聞列表',
		'general.scrollDown': '向下捲動',
	},
	en: {
		'nav.home': 'Home',
		'nav.story': "Fisherman's Story",
		'nav.game': 'Cast Net',
		'nav.news': 'News',
		'nav.sdg': 'About SDG 14',
		'cta.join': 'Join Action',
		'news.readMore': 'Read more',
		'news.latest': 'Latest',
		'news.back': 'Back to news',
		'general.scrollDown': 'Scroll Down',
	},
};

export function t(key: UIKey, locale?: string) {
	const loc = locale?.toLowerCase() === 'en' ? 'en' : 'zh-tw';
	return translations[loc]?.[key] ?? translations['zh-tw'][key] ?? key;
}

export function getAllKeys() {
	return Object.keys(translations['zh-tw']) as UIKey[];
}
