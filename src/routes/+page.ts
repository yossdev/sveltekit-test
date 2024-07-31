import type { PageLoad } from "./$types";
export const load: PageLoad = async ({ fetch }) => {
  let offset = 0;
  //   const getPokemons = async (offset = 0) => {
  const pokemons = await fetchJson(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );

  const pokemonsWithDetails = await Promise.allSettled(
    pokemons.results.map(
      async ({ url }: { url: string }) => await fetchJson(url)
    )
  );

  console.log("--------------- DONE ------------");

  return { pokemonsWithDetails };
  //   };

  async function fetchJson(url: string) {
    console.log("fetch");
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error!, Status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  //   return { pokemon: getPokemons };
};
