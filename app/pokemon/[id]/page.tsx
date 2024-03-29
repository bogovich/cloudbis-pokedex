import {fetchAndTransformPokemonDetails} from "@/app/actions";
import { IPokemonDetails } from "@/app/types";
import Image from 'next/image';
const PokemonDetailsView = async ({ params }: { params: { id: string } }) => {
    const pokemon: IPokemonDetails = await fetchAndTransformPokemonDetails(params.id);
    return (
        <main className="flex flex-grow flex-col items-center justify-center gap-4 lg:p-12 md:p-8 sm:p-6 p-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">{pokemon.name}</h2>
                <p className="text-lg">ID: {pokemon.id}</p>
                <Image width="450" height="450" src={pokemon.image} alt={pokemon.name} />
                <p className="text-lg">Height: {pokemon.height}m</p>
                <p className="text-lg">Weight: {pokemon.weight}kg</p>
                <p className="text-lg">Abilities: {pokemon.abilities.join(', ')}</p>
                <p className="text-lg">Types: {pokemon.types.join(', ')}</p>
                <p className="text-lg">Stats:</p>
                <ul>
                    {Object.entries(pokemon.stats).map(([key, value]) => (
                        <li key={key} className="text-lg">{key}: {value}</li>
                    ))}
                </ul>
            </div>

        </main>
    );
}

export default PokemonDetailsView;