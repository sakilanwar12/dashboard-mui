import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Bell, Inbox, Mail, OctagonAlert } from "lucide-react";

const BasicList = () => {
  return (
      <List component="ul">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Bell size={20} />
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail size={20} />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox size={20} />
            </ListItemIcon>
            <ListItemText primary="Draft" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <OctagonAlert size={20} />
            </ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
  );
};

export default BasicList;
