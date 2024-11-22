"use client";

import DarkLogo from "@/components/logos/dark-logo";
import { getMenus } from "@/lib/menus";
import { Box, List, Paper } from "@mui/material";
import React from "react";
import GroupLabel from "../common/group-label";
import MenuItem from "../common/menu-item";
import SubmenuHandler from "./submenu-handler";

const MercurySidebar = () => {
  const menus = getMenus();
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
      {menus.map((group, groupIndex) => (
        <Box key={groupIndex}>
          {group.groupLabel && <GroupLabel>{group.groupLabel}</GroupLabel>}
          <List component="ul" dense>
            {group.menus.map((menu, index) => {
              if (menu.subMenus) {
               return "Submenu"
              }
              return <MenuItem key={index} {...menu} />;
            })}
          </List>
        </Box>
      ))}
    </Paper>
  );
};

export default MercurySidebar;
