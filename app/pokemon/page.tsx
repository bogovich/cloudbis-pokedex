import {fetchAndTransformPokemonList} from "@/app/actions";
import { IPokemonTransformed} from "@/app/types";
import PokemonList from "@/app/_components/PokemonList";
const PokemonListView = async () => {
    const pokemons: IPokemonTransformed[] = await fetchAndTransformPokemonList();
    return (
        <main className="flex flex-grow flex-col items-center justify-center gap-4">
            <PokemonList pokemons={pokemons} />
        </main>
    );
}

export default PokemonListView;