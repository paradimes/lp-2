import NavHamburger from "../NavBar/NavHamburger";
import NavStandard from "../NavBar/NavStandard";

export default function Header() {
  return (
    <header
      id="header"
      className="flex items-start justify-between w-full mx-5 my-10 md:m-10"
    >
      <button className="bg-black bg-opacity-60 p-[2px] rounded-full">
        <div className="bg-black hover:bg-opacity-60 px-6 py-[3px] rounded-full text-white">
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
        <div className="bg-black hover:bg-opacity-60 px-6 py-[3px] rounded-full text-white ">
          Contact Us
        </div>
      </button>
    </header>
  );
}
