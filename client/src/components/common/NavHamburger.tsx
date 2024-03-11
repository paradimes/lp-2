import { motion } from "framer-motion";
import { useState } from "react";

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
          className="bg-black hover:bg-gray-800 size-10 flex items-center justify-center"
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
        // animate="open"
        variants={variants}
        transition={{ duration: 0.2 }}
        style={{ overflow: "hidden", display: "block" }}
        className="bg-black text-start w-[30vw]"
      >
        <a
          href="#home"
          className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
        >
          Home
        </a>
        <a
          href="#portfolio"
          className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
        >
          Portfolio
        </a>
        <a
          href="#services"
          className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
        >
          Services
        </a>
        <a
          href="#about"
          className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
        >
          About
        </a>
      </motion.div>
    </>
  );
}
