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
                {error.message}
            </p>
            <button onClick={() => reset()}>
                Try again
            </button>
        </main>
    )
}