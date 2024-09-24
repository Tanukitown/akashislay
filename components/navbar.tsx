import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-green-900 px-4 w-full md:shadow-lg items-center relative">
      <Link
        href="/"
        className="flex items-center text-lg font-bold md:py-0 py-4"
      >
        <Image
          src="/genbu.png"
          alt="Logo"
          height={50}
          width={50}
          className="mr-3"
        />
        Genbu Slayers!
      </Link>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li>
          <Link
            href="/gottem"
            className="flex rounded-md md:inline-flex p-4 items-center hover:bg-blue-900"
          >
            <span>Apply</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tooters"
            className="flex rounded-md md:inline-flex p-4 items-center hover:bg-blue-900"
          >
            <span>About Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
