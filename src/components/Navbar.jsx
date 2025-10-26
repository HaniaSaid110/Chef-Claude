import React from "react";
import { Link } from "react-router-dom";
import chefRobot from "../assets/images/chef-robot.png";

//icons
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggleMenu() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  // const handleResize = () => {
  //   if (window.innerWidth >= 768) {
  //     setIsOpen(false);
  //   }

  const listItems = [
    { name: `Home`, path: `/` },
    { name: `Claude Recipe`, path: `/claude-recipe` },
    { name: `My Picks`, path: `/my-picks` },
    { name: `About`, path: `/about` },
  ];

  const listItemElements = listItems.map(function (item, index) {
    return (
      <li
        className="text-lg font-medium md:border-0 border-b p-2 md:p-0 border-b-primary"
        key={index}
      >
        <Link to={item.path} className="" onClick={toggleMenu}>
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className="bg-primary fixed z-10 top-0 flex flex-row items-center justify-center w-full">
      <div className="container flex flex-row justify-between md:px-30 px-3">
        <Link to="/" className="flex flex-row items-center">
          <div className="md:w-20 w-15">
            <img src={chefRobot} alt="" />
          </div>
          <h1 className="text-secondary font-press-start font-press-start-thick text-lg tracking-tighter">
            Chef Claude
          </h1>
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden justify-self-end cursor-pointer"
        >
          <TfiLayoutMenuSeparated className="size-10 text-secondary" />
        </button>
        <div
          className={`fixed top-0 bottom-0 w-2/3 opacity-95 bg-secondary md:bg-transparent md:w-auto md:static md:flex md:items-center md:justify-between p-2
           ${
             isOpen ? `left-0` : `-left-full`
           } transition-all duration-300 ease-in-out`}
        >
          <ul className="w-full flex md:flex-row md:items-center md:justify-between md:gap-6 flex-col">
            {listItemElements}
          </ul>
        </div>
      </div>
    </nav>
  );
}
