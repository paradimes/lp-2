import { motion } from "framer-motion";
import { useState } from "react";
import NavBarLink from "./NavBarLink";

export default function NavHamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <>
      <div className="w-full flex items-end justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black bg-opacity-60 hover:bg-opacity-80 size-10 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
        style={{ overflow: "hidden", display: "block" }}
        className="bg-black bg-opacity-60 text-start w-[35vw] sm:w-[30vw] p-2 rounded-b-xl rounded-tl-xl"
      >
        <ul className="list-none p-[2px] flex-col flex gap-1">
          <NavBarLink title="Home" path="/" />
          <NavBarLink title="Portfolio" path="/portfolio" />
          <NavBarLink title="Services" path="/services" />
          <NavBarLink title="About" path="/about" />
        </ul>
      </motion.div>
    </>
  );
}
