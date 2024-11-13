import { Avatar, Stack } from "@mui/material";
import { NotebookIcon } from "lucide-react";

const VariantsAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: "primary.main" }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: "primary.main" }} variant="rounded">
        <NotebookIcon />
      </Avatar>
    </Stack>
  );
};

export default VariantsAvatar;
