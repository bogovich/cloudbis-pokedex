import { fetchAndTransformPokemonDetails } from "@/app/actions";
import { IPokemonDetails } from "@/app/types";
import PokemonStats from "@/app/_components/PokemonStats";
import PokemonImage from "@/app/_components/PokemonImage";
import { notFound } from 'next/navigation';

const PokemonTypes = ({ types }: { types: string[] }) => (
    <div className="text-base mb-2 dark:text-slate-300 flex">
    <span className="w-24 inline-block font-medium shrink-0">Types:</span>{" "}
    <div className="flex flex-wrap gap-1">
        {types.map((type) => (
            <span
                key={type}
                className={`bg-${type}-100 dark:text-slate-800 text-sm font-medium me-2 px-3 py-1 rounded`}
            >
                {type.toUpperCase()}
            </span>
        ))}
    </div>
</div>
);

const PokemonAbilities = ({ abilities }: { abilities: string[] }) => (
    <div className="text-base mb-2 dark:text-slate-300 flex">
    <span className="w-24 inline-block font-medium shrink-0">Abilities:</span>{" "}
    <div className="flex flex-wrap gap-1">
        {abilities.map((ability) => (
            <span
                key={ability}
                className="bg-gray-300 dark:text-slate-800 dark:bg-indigo-400 text-sm font-medium me-2 px-3 py-1 rounded"
            >
                {ability}
            </span>
        ))}
    </div>
</div>
);

const PokemonDetailsView = async ({ params }: { params: { id: string } }) => {
    const pokemon: IPokemonDetails = await fetchAndTransformPokemonDetails(
        params.id
    );

    if (!pokemon) {
		return notFound()
	}

    const mainType = pokemon.types[0];
    return (
        <main className="flex flex-grow flex-col items-center gap-4 md:p-8 sm:p-6 p-4">
            <div className="flex flex-col items-center justify-center w-full p-8 bg-slate-100 dark:bg-slate-600 rounded-md relative">
                <h2 className="text-2xl font-bold">{pokemon.name.toUpperCase()}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">#{pokemon.id}</p>
                <div className="flex flex-col items-center justify-center w-full md:flex-row lg:w-5/6 md:gap-16 my-4">
                        <div>
                            <PokemonImage src={pokemon.image} alt={pokemon.name} />
                        </div>
                    <div className="w-full lg:max-w-xl">
                        <div className="w-full">
                            <p className="text-base mb-2 dark:text-slate-300"><span className="w-24 inline-block font-medium">Height:</span>{pokemon.height}m</p>
                            <p className="text-base mb-2 dark:text-slate-300"><span className="w-24 inline-block font-medium">Weight:</span>{pokemon.weight}kg</p>
                            <PokemonAbilities abilities={pokemon.abilities} />
                            <PokemonTypes types={pokemon.types} />
                            <PokemonStats stats={pokemon.stats} mainType={mainType} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PokemonDetailsView;
