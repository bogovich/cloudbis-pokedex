import {fetchAndTransformPokemonList} from "@/app/actions";
import { IPokemonTransformed , IPokemonListProps} from "@/app/types";
import PokemonList from "@/app/_components/PokemonList";
const PokemonListView = async () => {
    const pokemons: IPokemonTransformed[] = await fetchAndTransformPokemonList();
    return (
        <main className="flex flex-grow flex-col items-center justify-center gap-4 lg:p-12 md:p-8 sm:p-6 p-4">
            <PokemonList pokemons={pokemons} />
        </main>
    );
}

export default PokemonListView;