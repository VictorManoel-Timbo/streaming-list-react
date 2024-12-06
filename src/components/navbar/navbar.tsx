'use client'
import Link from "next/link";
import NavLinks from "./nav-links";
import { RiHeartFill, RiMovie2Fill } from "react-icons/ri";
import { HiMenu, HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import clsx from "clsx";

const useMobileMenuState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return { isMobileMenuOpen, toggleMobileMenu };
};

export default function NavBar() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenuState();
  const { innerWidth: width } = window;

  return (
    <nav className="bg-cyan-700 min-w-full">
      <section className="min-w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <section className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-cyan-600 hover:text-white text-2xl">
              {isMobileMenuOpen ? <HiDotsVertical /> : <HiMenu />}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center">
            <Link href={"/"} >
              <div className="flex items-center justify-start italic text-white font-semibold text-xl cursor-pointer tracking-wider">
                { (width >= 640) ? 'Your Streaming List' : 'YKL' }
                <RiMovie2Fill className="sm:hidden text-2xl" />
              </div>
            </Link>
            <div className="hidden flex-1 text-center sm:block">
              <NavLinks />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href={"/favorites"} className="relative rounded-full bg-cyan-700 p-1 text-gray-300 hover:text-white focus:outline-none focus:text-red-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 text-2xl">
              <RiHeartFill />
            </Link>
            <div className="relative ml-3">
              <div className="relative flex rounded-full bg-cyan-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <img className="h-8 w-8 rounded-full" src="https://img.freepik.com/fotos-gratis/vista-do-aviador-pinguim-3d-animado-de-desenho-animado_23-2150882072.jpg?t=st=1720964224~exp=1720967824~hmac=058710a890e0ba36c6a696faf011eafcade9c9b584c311261b62f830cdf1971d&w=740" alt="user image" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={clsx('sm:hidden', { 'hidden': isMobileMenuOpen === false })}>
        <NavLinks />
      </section>
    </nav>
  );
}
