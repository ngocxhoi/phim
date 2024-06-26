export default defineEventHandler(async (event: any) => {
  const id = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/movie/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + config.apiKey,
    },
  });
});
