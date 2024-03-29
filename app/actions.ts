'use server'
import { IPokemonBasic, IPokemonDetails, IPokemonTransformed } from "@/app/types";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemonList = async (): Promise<IPokemonBasic[]> => {
    const response = await fetch(`${API_URL}?limit=905`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const { results } = await response.json();
    return results;
}

const transformList = (data: IPokemonBasic[]): IPokemonTransformed[] => {

    return data.map((pokemon) => {
        let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        if (name.includes('-') && name.length > 14) {
            name = name.split('-')[0];
        }

        const id = parseInt(pokemon.url.split('/').filter(Boolean).pop() || '0');
        const paddedId = id.toString().padStart(3, '0');
        const image = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${paddedId}.png`;
        return { id, name, image };
    });
}

// export const fetchAndTransformPokemonList = async (): Promise<IPokemonTransformed[]> => {
//     const pokemons: IPokemonBasic[] = await fetchPokemonList();
//     return transformList(pokemons);
// }

export const fetchAndTransformPokemonList = async (): Promise<IPokemonTransformed[]> => {
    const delay = new Promise(resolve => setTimeout(resolve, 2000));
    const pokemonsPromise = fetchPokemonList().then(pokemons => pokemons ? transformList(pokemons) : []);

    await Promise.all([delay, pokemonsPromise]);

    return pokemonsPromise;
}

export const fetchPokemon = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const results = await response.json();

    return results;
}

export const transformDetails = (data: any) => {
    let name = data.species.name.charAt(0).toUpperCase() + data.name.slice(1);
    const id = data.id;
    const paddedId = id.toString().padStart(3, '0');
    const image = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${paddedId}.png`;
    const height = data.height / 10;
    const weight = data.weight / 10;
    const abilities = data.abilities.map((ability: any) => [ability.ability.name, ability.slot]);
    const types = data.types.map((type: any) => [type.type.name, type.slot]);
    const stats = data.stats.map((stat: any) => [stat.stat.name, stat.base_stat]);
    return {
        id: id,
        height: height,
        weight: weight,
        name: name,
        image: image,
        abilities: abilities,
        types: types,
        stats: stats
    };
}

export const fetchAndTransformPokemonDetails = async (id: string): Promise<IPokemonDetails> => {
    const pokemon = await fetchPokemon(id);
    return transformDetails(pokemon);
}
