"use client";

import Link from "next/link";

const BrowsePokemonButton = ({ size = 'large' }) => {
  const sizeClasses = size === 'large' ? 'text-sm px-5 py-2.5 mb-2' : 'text-xs px-3 py-1.5';

  return (
    <Link
      href="/pokemon"
      type="button"
      className={`focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg ${sizeClasses} dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
    >
      {size === 'large' ? "Browse Pokémon" : "Browse"}
    </Link>
  );
};

export default BrowsePokemonButton;