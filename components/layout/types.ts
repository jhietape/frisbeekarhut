interface IMenuLink {
  href: string;
  pathName: string;
}

interface IPageLink {
  name: string;
  url: string;
}

interface INavBar {
  children: React.ReactNode;
}

export type { IMenuLink, IPageLink, INavBar };
