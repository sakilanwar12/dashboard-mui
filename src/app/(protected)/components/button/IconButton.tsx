import { Box, Button } from "@mui/material";
import { Bell, Mail } from 'lucide-react';
const IconButton = () => {
  return (
    <Box display="flex" gap="12px" flexWrap="wrap">
      <Button startIcon={<Bell size={20}/>}>Notifications</Button>
      <Button endIcon={<Mail  size={20}/>}>Message</Button>
    </Box>
  );
};

export default IconButton;
