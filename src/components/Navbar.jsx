import React from "react";
import { Link, useLocation } from "react-router-dom";
import chefRobot from "../assets/images/chef-robot.png";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Claude Recipe", path: "/claude-recipe" },
  { name: "My Picks", path: "/my-picks" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const listItemElements = navItems.map(function (item, index) {
    const active = location.pathname === item.path;
    return (
      <li key={index}>
        <Link
          to={item.path}
          onClick={closeMenu}
          className={`text-sm font-bold px-3 py-1.5 rounded-lg transition-all duration-150 ${
            active
              ? "bg-white/20 text-white"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-primary fixed top-0 left-0 right-0 z-50 shadow-[0_2px_16px_oklch(0.68_0.14_150/0.18)]">
      <div className="container mx-auto flex flex-row justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-row items-center gap-2"
          onClick={closeMenu}
        >
          <div className="w-12 md:w-18">
            <img src={chefRobot} alt="Chef Claude logo" />
          </div>
          <span className="font-press-start text-white text-sm md:text-base tracking-tight leading-tight">
            Chef Claude
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex flex-row items-center gap-1">
          {listItemElements}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-white p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <MdOutlineClose className="text-2xl" />
          ) : (
            <TfiLayoutMenuSeparated className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2 border-t border-white/20">
          {listItemElements}
        </ul>
      </div>
    </nav>
  );
}
