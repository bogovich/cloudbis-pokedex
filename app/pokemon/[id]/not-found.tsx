import Link from 'next/link'
import Image from 'next/image'
import BrowsePokemonButton from '@/app/_components/BrowsePokemonButton'

export default function NotFound() {
    return (
        <main className="flex flex-grow flex-col items-center gap-4 lg:p-12 md:p-8 sm:p-6 p-4">
            <h1 className="text-2xl font-bold">404 - Pokémon not Found</h1>
            <Image src="/poke-not-found.webp" alt="Pokemon not found" width={600} height={600} className='rounded'/>
            <p className="text-lg text-gray-600 dark:text-gray-300">Could not find requested Pokémon.</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Please return to homepage or browse all Pokémon.</p>
            <div className='flex items-center justify-center'>
                <Link href="/" className="focus:outline-none text-sm px-5 py-2.5 mb-2 text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg mr-5">Return Home</Link>
                <BrowsePokemonButton size="large" />
            </div>
        </main>
    )
}