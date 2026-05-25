export default defineEventHandler(async () => {
  const { rss2jsonApiKey } = useRuntimeConfig();

  const url = new URL('https://api.rss2json.com/v1/api.json');
  url.searchParams.set('rss_url', 'https://qiita.com/hiroyuki_0507/feed');
  if (rss2jsonApiKey) {
    url.searchParams.set('api_key', rss2jsonApiKey);
  }

  try {
    const data = await $fetch<{
      status: string;
      items: Array<{
        guid: string;
        title: string;
        link: string;
        pubDate: string;
        description: string;
      }>;
    }>(url.toString());

    return {
      items: (data.items ?? []).map((item) => ({
        guid: item.guid,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: stripHtml(item.description).slice(0, 160),
      })),
    };
  } catch (error) {
    console.error('[api/qiita] failed to fetch feed', error);
    return { items: [] };
  }
});

function stripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
