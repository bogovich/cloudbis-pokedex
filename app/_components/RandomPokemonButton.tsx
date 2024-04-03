'use client';

import { useRouter } from 'next/navigation';

const getRandomPokemonId = () => {
  const randomId = Math.floor(Math.random() * 905) + 1;
  return randomId;
};

const RandomPokemonButton = () => {
  const randomId = getRandomPokemonId();
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/pokemon/${randomId}`)}
      className="focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:bg-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:bg-lime-900"
    > Random Pokémon </button>
  );
};

export default RandomPokemonButton;