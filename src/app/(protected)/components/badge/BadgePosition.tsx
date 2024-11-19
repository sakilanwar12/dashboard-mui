import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

const BadgePosition = () => {
  return (
    <Box display="flex" gap="24px" flexWrap="wrap">
      <Badge color="primary" variant="dot" overlap="circular">
        <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
      </Badge>
      <Badge
        color="secondary"
        variant="dot"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Avatar src="/images/avatar/2.jpg" alt="User Avatar" />
      </Badge>
      <Badge
        color="success"
        variant="dot"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        overlap="circular"
      >
        <Avatar src="/images/avatar/3.jpg" alt="User Avatar" />
      </Badge>
      <Badge
        color="warning"
        variant="dot"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        overlap="circular"
      >
        <Avatar src="/images/avatar/4.jpg" alt="User Avatar" />
      </Badge>
    </Box>
  );
};

export default BadgePosition;
