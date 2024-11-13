import { Avatar, Stack } from "@mui/material";
import { Cuboid, FolderIcon, NotebookIcon } from "lucide-react";

const IconAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: { main: "primary.main" } }}>
        <NotebookIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: { main: "secondary.main" } }}>
        <Cuboid />
      </Avatar>
    </Stack>
  );
};

export default IconAvatar;
