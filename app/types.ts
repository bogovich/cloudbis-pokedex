export interface IPokemonBasic {
    name: string;
    url: string;
}

export interface IPokemonTransformed {
    id: number;
    name: string;
    image: string;
}

export interface IPokemonCardProps {
    pokemon: IPokemonTransformed;
}

export interface IPokemonListProps {
    pokemons: IPokemonTransformed[];
}
