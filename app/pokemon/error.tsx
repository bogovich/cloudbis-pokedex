'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {

        console.error(error)
    }, [error])

    return (
        <main className="flex flex-grow flex-col items-center justify-center gap-4 lg:p-12 md:p-8 sm:p-6 p-4">
            <h1>Something went wrong!</h1>
            <p>
                Error: {error.message}
            </p>
            <button className="focus:outline-none text-sm px-5 py-2.5 mb-2 text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg mr-5" onClick={() => reset()}>
                Try again
            </button>
        </main>
    )
}