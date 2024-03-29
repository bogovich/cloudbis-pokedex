'use server'
import { IPokemonBasic, IPokemonTransformed } from "@/app/types";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemonList = async (): Promise<IPokemonBasic[]> => {
    const response = await fetch(`${API_URL}?limit=905`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const { results } = await response.json();
    return results;
}

const transformData = (data: IPokemonBasic[]): IPokemonTransformed[] => {

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

export const fetchAndTransformPokemonList = async (): Promise<IPokemonTransformed[]> => {
    const pokemons: IPokemonBasic[] = await fetchPokemonList();
    return transformData(pokemons);
}

export const fetchPokemon = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data;
}