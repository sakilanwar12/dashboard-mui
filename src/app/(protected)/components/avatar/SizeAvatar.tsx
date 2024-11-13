import { Avatar, Stack } from "@mui/material";

const SizeAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
      <Avatar
        alt="Remy Sharp"
        src="/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
};

export default SizeAvatar;
