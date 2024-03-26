import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/app/_components/ThemeSwitcher';
import { auth, signOut } from '@/auth';

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className="mr-5 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-200" type="submit">Sign out</button>
    </form>
  );
}

const Header = async () => {
  const session = await auth();

  return (
    <header className="text-gray-600 body-font border-b-2 dark:bg-gray-700">
      <div className="flex justify-between md:flex-row items-center py-3 lg:mx-12 md:mx-8 sm:mx-6 mx-4">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-0">
          <Image src="/Pokedex.svg" alt="Pokedex" width={35} height={35} />
          <span className="ml-3 text-xl dark:text-slate-300">Pokédex</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {session && <SignOut />}
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;