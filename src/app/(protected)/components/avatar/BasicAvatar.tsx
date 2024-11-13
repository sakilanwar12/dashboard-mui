import { Avatar, Stack } from "@mui/material";

const BasicAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" />
    </Stack>
  );
};

export default BasicAvatar;
