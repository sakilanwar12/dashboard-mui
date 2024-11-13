import { Avatar, Stack } from "@mui/material";

const LettersAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: "primary.main" }}>SA</Avatar>
      <Avatar sx={{ bgcolor: "secondary.main" }}>SB</Avatar>
      <Avatar sx={{ bgcolor: "success.main" }}>SC</Avatar>
      <Avatar sx={{ bgcolor: "warning.main" }}>SD</Avatar>
      <Avatar sx={{ bgcolor: "info.main" }}>SE</Avatar>
      <Avatar sx={{ bgcolor: "error.main" }}>SF</Avatar>
    </Stack>
  );
};

export default LettersAvatar;
