import { SubMenus } from "@/lib/menus/types";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const SubmenuHandler = ({
  label,
  link,
  icon: Icon,
  submenusChild,
}: SubMenus) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <ListItemButton centerRipple onClick={() => setOpen(!open)}>
        <ListItemIcon>
          {Icon && <Icon height="16px" width="16px" />}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            Icon
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default SubmenuHandler;
