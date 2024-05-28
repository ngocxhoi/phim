export async function useApiAuth(path, options) {
  let data = await useFetch("https://api.themoviedb.org/3" + path, {
    watch: false,
    ...options,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjE5ZTk4ZjZjYmNjOWNhNWIzMjY5NzhkYTM2OTYxZCIsInN1YiI6IjY1Njg0NGY0MDljMjRjMDEzODhlOThlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qFPUXFsB0wALJRqdrg2gS7zmaRfIiMhldShELEBJUaI",
      ...options?.headers,
    },
  });

  return data;
}
