"use client";
import { SearchBar } from "@/app/_components/SearchBar";
import { IPokemonListProps } from "@/app/types";
import { useState } from "react";
import "./PokemonList.css";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useFilteredPokemons } from "@/app/hooks/useFilteredPokemons";
import PokemonGrid from "@/app/_components/PokemonGrid";

const PokemonList = ({ pokemons }: IPokemonListProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const filteredPokemons = useFilteredPokemons(pokemons, debouncedSearchTerm);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    const columnWidth = 160;
    const rowHeight = 174;

    return (
        <div className="flex flex-col size-full">
            <div className="shadow-md z-100">
                <h1 className="text-3xl font-bold text-center">Pokemon List</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="size-full">
                <PokemonGrid
                    columnWidth={columnWidth}
                    height={window.innerHeight - 100}
                    rowCount={Math.ceil(filteredPokemons.length / 4)}
                    rowHeight={rowHeight}
                    width={window.innerWidth}
                    pokemons={filteredPokemons}
                />
            </div>
        </div>
    );
};

export default PokemonList;
