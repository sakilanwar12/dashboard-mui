import { Avatar, Stack } from "@mui/material";

const FallbackAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/images/avatar/unknown.jpg">
        B
      </Avatar>
      <Avatar alt="Remy Sharp" src="/images/avatar/unknown.jpg">
        c
      </Avatar>
      <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
    </Stack>
  );
};

export default FallbackAvatar;
