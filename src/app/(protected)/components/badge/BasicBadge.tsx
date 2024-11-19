import { Badge, Box } from "@mui/material";
import { Bell, Mail,  Phone,  User, UserCircle, Video } from "lucide-react";

const BasicBadge = () => {
  return (
    <Box display="flex" gap="24px" flexWrap="wrap">
      <Badge badgeContent={4} color="primary">
        <Bell size={26} />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <Mail size={26} />
      </Badge>
      <Badge badgeContent={5} color="success">
        <User size={26} />
      </Badge>
      <Badge badgeContent={5} color="info">
        <Phone size={26} />
      </Badge>
      <Badge badgeContent={5} color="warning">
        <Video size={26} />
      </Badge>
      <Badge badgeContent={5} color="error">
        <UserCircle size={26} />
      </Badge>
    </Box>
  );
};

export default BasicBadge;
