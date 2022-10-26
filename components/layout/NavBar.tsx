import { NextPage } from "next/types";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface NavBarProps {
  children: React.ReactNode;
}
const NavBar: NextPage<any> = ({ children }: NavBarProps) => {
  interface Page {
    name: string;
    url: string;
  }
  const pages: Page[] = [
    {
      name: "Etusivu",
      url: "/tietoa",
    },
    {
      name: "Jäseneksi",
      url: "/tietoa",
    },
    {
      name: "Kilpailut",
      url: "/kilpailut",
    },
    {
      name: "Radat",
      url: "/tietoa",
    },
    {
      name: "Yhteystiedot",
      url: "/tietoa",
    },
    {
      name: "Shop",
      url: "/shop",
    },
  ];

  const menu_page_items = pages.map((page: Page) => (
    <li key={page.name}>
      <a href={page.url}>{page.name}</a>
    </li>
  ));

  return (
    <header className="navbar bg-secondary text-white lg:pl-32">
      <div className="hidden lg:block absolute left-4 top-4 z-50 w-28 h-28 px-2 pb-2 pt-1 rounded-lg box-border bg-white">
        <img src="/images/frisbeekarhut.jpg" className="w-24 h-26" />
      </div>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu_page_items}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Ylivieskan Frisbeekarhut Ry
        </a>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal p-0">{menu_page_items}</ul>
      </div>
      <div className="navbar-end"></div>
    </header>
  );
};
export default NavBar;
