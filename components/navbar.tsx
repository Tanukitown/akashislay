import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const dropdownContent = document.querySelectorAll(".dropdown-content>li");
    dropdownContent.forEach((element) => {
      element.addEventListener("click", () => {
        if (document.activeElement instanceof HTMLElement)
          document.activeElement.blur();
      });
    });
  });

  return (
    <nav className="navbar w-full bg-neutral sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/war-room">War Room</Link>
            </li>
            <li>
              <Link href="/apologies">Apologies</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/images/genbu.png" alt="Logo" height={45} width={45} />
          Genbu Slayers!
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/war-room">War Room</Link>
          </li>
          <li>
            <Link href="/apologies">Apologies</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/gottem" className="btn btn-secondary">
          Apply
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
