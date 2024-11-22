"use client"
import { Menus } from "@/lib/menus/types";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MenuItem = ({label,link,icon:Icon}:Menus) => {
  return (
    <ListItemButton centerRipple component="a" href={link}>
      <ListItemIcon>
        {Icon && <Icon height="16px"  width="16px" />}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default MenuItem;
