"use client";

import DarkLogo from "@/components/logos/dark-logo";
import { getMenus } from "@/lib/menus";
import { Box, List, ListItemButton, ListItemIcon, Paper } from "@mui/material";
import { Fragment, useMemo } from "react";
import GroupLabel from "../common/group-label";
import MenuItem from "../common/menu-item";
import { Menu } from "@/lib/menus/types";
import SubMenuItem from "../common/sub-menu-item";
import {
  SubMenuContent,
  SubMenuWrapper,
  SubMenuTrigger,
} from "../common/submenu-helpers";
import { ChevronDownIcon } from "lucide-react";

const MercurySidebar = () => {
  const menus: Menu[] = useMemo(() => getMenus(), []);

  return (
    <Paper
      sx={{
        width: "290px",
        px: "20px",
        height: "100vh",
        position: "fixed",
        top: "0",
      }}
    >
      <DarkLogo />
      {menus.map(({ groupLabel, menus: groupMenus }, groupIndex) => (
        <Box key={groupIndex}>
          {groupLabel && <GroupLabel>{groupLabel}</GroupLabel>}

          <List component="ul" dense>
            {groupMenus.map(({ subMenus, label, ...menu }, index) => {
              const submenuKey = `submenu-${groupIndex}-${index}`;
              return subMenus ? (
                <Fragment key={submenuKey}>
                  <SubMenuWrapper>
                    <SubMenuTrigger>
                      {(isOpen) => (
                        <ListItemButton>
                          {label}
                          <ListItemIcon
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transformOrigin: "center", 
                              transition: "transform 0.3s ease-in-out", 
                            }}
                          >
                            <ChevronDownIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      )}
                    </SubMenuTrigger>
                    <SubMenuContent>
                      {subMenus.map((submenu, index) => (
                        <SubMenuItem
                          key={`${submenuKey}-${index}`}
                          {...submenu}
                        />
                      ))}
                    </SubMenuContent>
                  </SubMenuWrapper>
                </Fragment>
              ) : (
                <MenuItem key={index} label={label} {...menu} />
              );
            })}
          </List>
        </Box>
      ))}
    </Paper>
  );
};

export default MercurySidebar;
