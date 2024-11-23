import { Menu } from "./types";
import { LayoutGrid } from "lucide-react";
const menus: Menu[] = [
  {
    groupLabel: "Dashboards",
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
    groupLabel: "Apps Kit",
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
            label: "Menu 1.2",
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
  {
    groupLabel: "Pages",
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
            label: "Menu 1.2",
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
  {
    groupLabel: "Widgets",
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
            label: "Menu 1.2",
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
  {
    groupLabel: "Components",
    menus: [
      {
        label: "User Interface",
        link: "/",
        icon: LayoutGrid,
        subMenus: [
          {
            label: "Accordion",
            link: "/components/accordion",
          },
          {
            label: "Alert",
            link: "/components/alert",
          },
          {
            label: "Avatar",
            link: "/components/avatar",
          },
          {
            label: "Badge",
            link: "/components/badge",
          },
          {
            label: "Breadcrumb",
            link: "/components/breadcrumb",
          },
          {
            label: "Button",
            link: "/components/button",
          },
          {
            label: "Card",
            link: "/components/card",
          },
          {
            label: "Chip",
            link: "/components/chip",
          },
          {
            label: "Dialog",
            link: "/components/dialog",
          },
          {
            label: "Divider",
            link: "/components/divider",
          },
          {
            label: "Drawer",
            link: "/components/drawer",
          },
          {
            label: "List",
            link: "/components/list",
          },
          {
            label: "Pagination",
            link: "/components/pagination",
          },
          {
            label: "Progress",
            link: "/components/progress",
          },
          {
            label: "Skeleton",
            link: "/components/skeleton",
          },
          {
            label: "Snackbar",
            link: "/components/snackbar",
          },
          {
            label: "Stepper",
            link: "/components/stepper",
          },
          {
            label: "Tooltip",
            link: "/components/tooltip",
          },
          {
            label: "Typography",
            link: "/components/typography",
          },
        ],
      },
    ],
  },
  {
    groupLabel: "Forms",
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
            label: "Menu 1.2",
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
  {
    groupLabel: "Tables",
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
            label: "Menu 1.2",
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
  {
    groupLabel: "Charts & Maps",
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
            label: "Menu 1.2",
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
];

export const getMenus = () => menus;
