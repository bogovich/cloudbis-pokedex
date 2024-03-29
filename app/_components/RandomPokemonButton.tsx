"use client";

const getRandomPokemonId = () => {
  const randomId = Math.floor(Math.random() * 905) + 1;
  return randomId;
};

const RandomPokemonButton = () => {
  const randomId = getRandomPokemonId();

  return (
    <form action={`/pokemon/${randomId}`}>
      <button
        type="submit"
        className="focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:bg-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:bg-lime-900"
      >
        Random Pokémon
      </button>
    </form>
  );
};

export default RandomPokemonButton;