import NavHamburger from "./NavHamburger";
import NavStandard from "./NavStandard";

export default function Header() {
  return (
    <header
      id="header"
      className="flex items-start justify-between w-full m-10 border-2 border-blue-400"
    >
      <button className="bg-black bg-opacity-60 p-[2px] rounded-full">
        <div className="bg-black hover:bg-gray-800 px-6 py-[3px] rounded-full text-white">
          ArchitectsYYZ
        </div>
      </button>

      {/* Hamburger NavBar */}
      <div className="lg:hidden">
        <NavHamburger />
      </div>

      {/* Standard Navbar for larger screens */}
      <NavStandard />

      <button className="hidden lg:flex bg-black bg-opacity-60 p-[2px] rounded-full">
        <div className="bg-black hover:bg-gray-800 px-6 py-[3px] rounded-full text-white ">
          Contact Us
        </div>
      </button>
    </header>
  );
}
