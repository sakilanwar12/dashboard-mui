import { Avatar, Badge, Box } from "@mui/material";

const DotBadge = () => {
  return (
    <Box display="flex" gap="24px" flexWrap="wrap">
      <Badge badgeContent={4} color="primary" variant="dot">
        <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
      </Badge>
      <Badge badgeContent={4} color="secondary" variant="dot">
        <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
      </Badge>
      <Badge badgeContent={4} color="success" variant="dot">
        <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
      </Badge>
      <Badge badgeContent={4} color="info" variant="dot">
        <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      </Badge>
      <Badge badgeContent={4} color="warning" variant="dot">
        <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" />
      </Badge>
      <Badge badgeContent={4} color="error" variant="dot">
        <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" />
      </Badge>
    </Box>
  );
};

export default DotBadge;
