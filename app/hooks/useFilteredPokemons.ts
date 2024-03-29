import { useMemo } from 'react';
import { IPokemonTransformed } from "@/app/types";

export const useFilteredPokemons = (pokemons: IPokemonTransformed[], searchTerm: string) => {
    return useMemo(
        () =>
            pokemons.filter(
                (pokemon) =>
                    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    pokemon.id.toString().includes(searchTerm)
            ),
        [pokemons, searchTerm]
    );
};