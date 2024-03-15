import { useNavigate } from "react-router-dom";
import NavHamburger from "./NavBar/NavHamburger";
import NavStandard from "./NavBar/NavStandard";
import { motion } from "framer-motion";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="w-full absolute top-0 left-0 bg-none z-50"
    >
      <header
        id="header"
        className="flex items-start justify-between mx-5 my-10 md:mx-10"
      >
        <button
          className="bg-black bg-opacity-60 p-[2px] rounded-full"
          onClick={() => handleClick("")}
        >
          <div className="bg-black hover:bg-opacity-60 px-6 py-[3px] rounded-full text-white">
            ArchitectsNYC
          </div>
        </button>

        {/* Hamburger NavBar */}
        <div className="lg:hidden">
          <NavHamburger />
        </div>

        {/* Standard Navbar for larger screens */}
        <NavStandard />

        <button
          className="hidden lg:flex bg-black bg-opacity-60 p-[2px] rounded-full"
          onClick={() => handleClick("contact")}
        >
          <div className="bg-black hover:bg-opacity-60 px-6 py-[3px] rounded-full text-white ">
            Contact Us
          </div>
        </button>
      </header>
    </motion.header>
  );
}
