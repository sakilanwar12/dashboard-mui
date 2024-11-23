
import { SubMenus } from "@/lib/menus/types";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const SubMenuItem = ({label,link}:SubMenus) => {
  return (
    <ListItemButton centerRipple component="a" href={link}>
      <ListItemIcon>
       .
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default SubMenuItem;
