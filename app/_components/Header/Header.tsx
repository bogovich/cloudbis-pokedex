import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/Pokedex.svg" alt="Pokedex" width={35} height={35} />
          <span className="ml-3 text-xl">Pokedex</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
          <Link className="mr-5 hover:text-gray-900" href="/register">Register</Link>
          <Link className="mr-5 hover:text-gray-900" href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;