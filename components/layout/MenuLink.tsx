import Link from "next/link";
import { useRouter } from "next/router";
import { IMenuLink } from "./types";

const MenuLink = ({ href, pathName }: IMenuLink) => {
  const router = useRouter();
  return (
    <li>
      <Link href={href} passHref>
        <a className={router.pathname == href ? "active" : ""}>{pathName}</a>
      </Link>
    </li>
  );
};
export default MenuLink;
