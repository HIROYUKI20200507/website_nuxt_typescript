export default defineEventHandler(async (event) => {
  const { pixabayApiKey } = useRuntimeConfig();
  const query = getQuery(event);
  const q = typeof query.q === 'string' && query.q.length > 0 ? query.q : 'Programming';
  const perPage = Number(query.per_page ?? 12);

  if (!pixabayApiKey) {
    return { hits: [] };
  }

  const url = new URL('https://pixabay.com/api/');
  url.searchParams.set('key', pixabayApiKey);
  url.searchParams.set('q', q);
  url.searchParams.set('per_page', String(Math.min(Math.max(perPage, 3), 50)));
  url.searchParams.set('image_type', 'photo');
  url.searchParams.set('safesearch', 'true');

  try {
    const data = await $fetch<{
      hits: Array<{ id: number; largeImageURL: string; webformatURL: string }>;
    }>(url.toString());

    return {
      hits: (data.hits ?? []).map((h) => ({
        id: h.id,
        url: h.webformatURL,
      })),
    };
  } catch (error) {
    console.error('[api/pixabay] failed to fetch', error);
    return { hits: [] };
  }
});
