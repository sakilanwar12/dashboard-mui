import { Box, Button, IconButton } from "@mui/material";
import { Bell, Mail, Trash2 } from "lucide-react";
const WithIconButton = () => {
  return (
    <Box display="flex" gap="12px" flexWrap="wrap">
      <IconButton>
        <Bell size={20} />
      </IconButton>
      <IconButton color="primary">
        <Bell size={20} />
      </IconButton>
      <IconButton color="secondary">
        <Mail size={20} />
      </IconButton>
      <IconButton color="info">
        <Mail size={20} />
      </IconButton>
      <IconButton color="warning">
        <Mail size={20} />
      </IconButton>
      <IconButton color="error">
        <Mail size={20} />
      </IconButton>
      <IconButton size="large">
        <Trash2 size={20} />
      </IconButton>
      <Button startIcon={<Bell size={20} />}>Notifications</Button>
      <Button endIcon={<Mail size={20} />}>Message</Button>
    </Box>
  );
};

export default WithIconButton;
