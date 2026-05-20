type Locale = 'zh-tw' | 'en' | 'ja';

export type NewsKey = keyof typeof translations['zh-tw'];

const translations = {
	'zh-tw': {
		'news.archive.meta.title': '相關新聞 | 漁夫視角的海洋保育',
		'news.archive.kicker': '新聞總覽',
		'news.archive.title': '相關新聞',
		'news.archive.desc': '收集與海洋保育、漁業、氣候與政策相關的最新報導，方便快速閱讀與延伸追蹤。',
		'news.card.label': '新聞',
		'news.detail.meta.titleSuffix': '漁夫視角的海洋保育',
		'news.detail.kicker': '新聞詳情',
		'news.detail.author': '作者',
	},
	en: {
		'news.archive.meta.title': 'News | A Fisherman\'s Perspective on Marine Conservation',
		'news.archive.kicker': 'News Archive',
		'news.archive.title': 'News',
		'news.archive.desc': 'Latest reports on marine conservation, fisheries, climate, and policy, curated for quick reading and follow-up.',
		'news.card.label': 'News',
		'news.detail.meta.titleSuffix': 'A Fisherman\'s Perspective on Marine Conservation',
		'news.detail.kicker': 'News Detail',
		'news.detail.author': 'Author',
	},
	ja: {
		'news.archive.meta.title': '関連ニュース | 漁師の視点から見る海洋保護',
		'news.archive.kicker': 'ニュース一覧',
		'news.archive.title': '関連ニュース',
		'news.archive.desc': '海洋保護、漁業、気候、政策に関する最新情報を集め、素早く読んで追跡できるようにしています。',
		'news.card.label': 'ニュース',
		'news.detail.meta.titleSuffix': '漁師の視点から見る海洋保護',
		'news.detail.kicker': 'ニュース詳細',
		'news.detail.author': '著者',
	},
} as const;

export function t(key: NewsKey, locale?: string) {
	const normalized = locale?.toLowerCase();
	const loc: Locale = normalized === 'en' || normalized === 'ja' ? normalized : 'zh-tw';
	return translations[loc]?.[key] ?? translations['zh-tw'][key] ?? key;
}
