import { auth } from "@/auth";
import Image from "next/image";
import SignInGoogle from "@/app/_components/SignInGoogle";
import SignInGithub from "@/app/_components/SignInGithub";
import BrowsePokemonButton from "@/app/_components/BrowsePokemonButton";
import RandomPokemonButton from "@/app/_components/RandomPokemonButton";

export default async function Home() {
  let session = await auth();
  let user = session?.user;

  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-4 lg:p-12 md:p-8 sm:p-6 p-4">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex items-center justify-center flex-col">
          <Image
            width="720"
            height="600"
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/pokedex-min.png"
            priority
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-slate-400">
              Welcome to Pokédex
            </h1>
            <p className="mb-8 leading-relaxed dark:text-slate-400">
              Welcome to Pokedex, your ultimate companion in the world of
              Pokémon! Explore an extensive collection of Pokémon species, their
              abilities, and much more. Get ready to embark on a journey filled
              with excitement and discovery!
            </p>

            {user ? (
              <div className="flex flex-wrap justify-center">
                <BrowsePokemonButton />
                <RandomPokemonButton />

              </div>
            ) : (
              <>
                <p className="mb-8 leading-relaxed dark:text-slate-400">
                  Sign in to get started!
                </p>
                <div className="flex flex-wrap justify-center">
                  <SignInGoogle />
                  <SignInGithub />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
