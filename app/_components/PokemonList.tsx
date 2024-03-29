'use client';
import PokemonCard from "@/app/_components/PokemonCard";
import { IPokemonListProps } from "@/app/types";

const PokemonList = ({ pokemons }: IPokemonListProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonList;