import { NavLink } from "react-router-dom";

type NavLinkProps = {
  title: string;
  path: string;
};

export default function NavBarLink({ title, path }: NavLinkProps) {
  return (
    <li className="lg:ml-[-10px] lg:first:ml-0 focus:z-50">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "bg-black px-6 py-[3px] rounded-full text-white cursor-pointer block w-full h-full hover:bg-opacity-60"
            : "px-6 py-[3px] rounded-full text-white cursor-pointer block w-full h-full hover:bg-black hover:bg-opacity-30"
        }
      >
        {title}
      </NavLink>
    </li>
  );
}
