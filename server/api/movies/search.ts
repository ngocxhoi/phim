export default defineEventHandler(async (event: any) => {
  const { query, page } = getQuery(event);
  const config = useRuntimeConfig();
  return $fetch(
    `${config.apiBaseUrl}/search/movie?query=${query}&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + config.apiKey,
      },
    }
  );
});
