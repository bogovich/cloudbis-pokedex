export interface IPokemonBasic {
    name: string;
    url: string;
}

export interface IPokemonTransformed {
    id: number;
    name: string;
    image: string;
}

export interface IPokemonDetails {
    id: number;
    height: number;
    weight: number;
    name: string;
    image: string;
    abilities: string[];
    types: string[];
    stats: {
        [key: string]: number;
    };
}

export interface IPokemonCardProps {
    pokemon: IPokemonTransformed;
}

export interface IPokemonDetailsProps {
    pokemon: IPokemonDetails;
}

export interface IPokemonListProps {
    pokemons: IPokemonTransformed[];
}
