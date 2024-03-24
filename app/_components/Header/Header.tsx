import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/app/_components/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b-2 dark:bg-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/Pokedex.svg" alt="Pokedex" width={35} height={35} />
          <span className="ml-3 text-xl dark:text-slate-300">Pokedex</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-200" href="/">Home</Link>
          <Link className="mr-5 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-200" href="/register">Register</Link>
          <Link className="mr-5 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-200" href="/login">Login</Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;