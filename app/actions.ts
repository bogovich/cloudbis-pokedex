"use server";
import {
    IPokemonBasic,
    IPokemonDetails,
    IPokemonTransformed,
} from "@/app/types";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const padId = (id: number) => id.toString().padStart(3, "0");

const fetchPokemonList = async (): Promise<IPokemonBasic[]> => {
    const response = await fetch(`${API_URL}?limit=905`);

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const { results } = await response.json();
    return results;
};

const transformList = (data: IPokemonBasic[]): IPokemonTransformed[] => {
    return data.map((pokemon) => {
        let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        if (name.includes("-") && name.length > 14) {
            name = name.split("-")[0];
        }

        const id = parseInt(pokemon.url.split("/").filter(Boolean).pop() || "0");
        const paddedId = padId(id);
        const image = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${paddedId}.png`;
        return { id, name, image };
    });
};

export const fetchAndTransformPokemonList = async (): Promise<IPokemonTransformed[]> => {
    const pokemons: IPokemonBasic[] = await fetchPokemonList();
    return transformList(pokemons);
}

export const fetchPokemon = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.status === 404) {
        return null;
    } else if (response.status >= 500) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
    } else if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const results = await response.json();

    return results;
};

const formatStatName = (statName: string) => {
    if (statName === "hp") {
        statName = statName.toUpperCase();
    } else if (statName.includes("-")) {
        statName = statName
            .split("-")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    } else {
        statName = statName.charAt(0).toUpperCase() + statName.slice(1);
    }
    return statName;
};

const formatAbilityName = (ability: any) =>
    ability.ability.name
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

const mapStats = (stats: any[]) => {
    let maxBaseStat = 0;
    const statsObj = stats.reduce((acc: any, stat: any) => {
        const base_stat = stat.base_stat;
        let statName = formatStatName(stat.stat.name);
        acc[statName] = {
            base_stat: base_stat,
            normalized_perc: 0,
        };
        if (base_stat > maxBaseStat) {
            maxBaseStat = base_stat;
        }
        return acc;
    }, {});
    return { statsObj, maxBaseStat };
};

export const transformDetails = (data: any) => {
    const { id, height, weight, abilities, types, stats } = data;
    const name = data.species.name.charAt(0).toUpperCase() + data.name.slice(1);
    const paddedId = padId(id);
    const image = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${paddedId}.png`;
    const normalizedHeight = height / 10;
    const normalizedWeight = weight / 10;
    const mappedAbilities = abilities.map((ability: any) => {
        return formatAbilityName(ability);
    });
    const typeNames = types.map((type: any) => type.type.name);
    const { statsObj, maxBaseStat } = mapStats(stats);

    Object.values(statsObj).forEach((stat: any) => {
        stat.normalized_perc = (stat.base_stat / maxBaseStat) * 100;
    });
    return {
        id: paddedId,
        height: normalizedHeight,
        weight: normalizedWeight,
        name: name,
        image: image,
        abilities: mappedAbilities,
        types: typeNames,
        stats: statsObj,
    };
};

export const fetchAndTransformPokemonDetails = async (
    id: string
): Promise<IPokemonDetails> => {
    const pokemon = await fetchPokemon(id);
    return pokemon ? transformDetails(pokemon) : pokemon;
};
