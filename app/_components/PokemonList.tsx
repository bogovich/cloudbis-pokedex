"use client";
import { SearchBar } from "@/app/_components/SearchBar";
import { IPokemonListProps } from "@/app/types";
import { useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
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
        <div className="flex flex-col gap-4 size-full">
            <div>
                <h1 className="text-3xl font-bold text-center">Pokemon List</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="size-full">
                <AutoSizer>
                    {({ height, width }) => {
                        const columnCount = Math.floor(width / columnWidth);
                        const rowCount = Math.ceil(filteredPokemons.length / columnCount);
                        return (
                            <PokemonGrid
                                columnCount={columnCount}
                                columnWidth={columnWidth}
                                height={height}
                                rowCount={rowCount}
                                rowHeight={rowHeight}
                                width={width}
                                pokemons={filteredPokemons}
                            />
                        );
                    }}
                </AutoSizer>
            </div>
        </div>
    );
};

export default PokemonList;
