export type SubmenusChild = {
  label: string;
  link: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type SubMenus = {
  label: string;
  link: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  submenusChild?: SubmenusChild[];
};
export type Menus = {
  label: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subMenus?: SubMenus[];
};
export type Menu = {
  groupLabel: string;
  menus: Menus[];
};
