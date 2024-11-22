import { Menu } from "./types";
import { LayoutGrid } from "lucide-react";
const menus: Menu[] = [
  {
    groupLabel: "Group 1",
    menus: [
      {
        label: "Menu 1",
        link: "/",
        icon: LayoutGrid,
      },
      {
        label: "Menu 2",
        link: "/",
        icon: LayoutGrid,
      },
    ],
  },
  {
    groupLabel: "Group 2",
    menus: [
      {
        label: "Menu 1",
        link: "/",
        icon: LayoutGrid,
      },
      {
        label: "Menu 2",
        link: "/",
        icon: LayoutGrid,
        subMenus: [
          {
            label: "Menu 1.1",
            link: "/",
          },
          {
            label: "Menu 1.1",
            link: "/",
          },
          {
            label: "Menu 1.1",
            link: "/",
            submenusChild: [
              {
                label: "Menu 1.1",
                link: "/",
              },
              {
                label: "Menu 1.1",
                link: "/",
              },
              {
                label: "Menu 1.1",
                link: "/",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getMenus = () => menus;
