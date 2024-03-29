import Links from "./links";
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-col items-center p-5 mx-auto md:flex-row ">
          <Link className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" href={'/'}>
            <IoGameController size={20} />
            <span className="ml-3 text-xl text-orange-500">Zephyr</span>
          </Link>
          <nav className={'flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400'}>
            <Links  />
            {/* <a className="mr-5 hover:text-purple-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Careers</a>*/}
          </nav>
          <Link href={'/login'}>
          <button className="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded focus:outline-none hover:bg-[var(--bgSoft)] md:mt-0 hover:text-orange-500">
            <FaAngleRight size={24} />
            Login
          </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
