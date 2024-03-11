export default function NavStandard() {
  return (
    <div className="hidden lg:flex justify-center items-center bg-black">
      <a
        href="#home"
        className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
      >
        Home
      </a>
      <a
        href="#portfolio"
        className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
      >
        Portfolio
      </a>
      <a
        href="#services"
        className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
      >
        Services
      </a>
      <a
        href="#about"
        className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
      >
        About
      </a>
    </div>
  );
}
