import NavBarLink from "./NavBarLink";

export default function NavStandard() {
  return (
    <ul className="list-none hidden lg:flex bg-black bg-opacity-60 p-[2px] rounded-full flex-row">
      <NavBarLink title="Home" path="/" />
      <NavBarLink title="Portfolio" path="/portfolio" />
      <NavBarLink title="Services" path="/services" />
      <NavBarLink title="About" path="/about" />
    </ul>
  );
}
