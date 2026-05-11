export function formatDate(input: string | Date, locale = 'zh-tw') {
  const date = typeof input === 'string' ? new Date(input) : input;
  if (isNaN(date.getTime())) return String(input);

  if (locale === 'en') {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }

  if (locale === 'ja') {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }

  // default zh-TW
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function prefixLocalePath(path: string, locale = 'zh-tw') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const loc = locale === 'en' || locale === 'ja' ? locale : 'zh-tw';
  return `/${loc}${normalized}`;
}
