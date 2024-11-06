import { Box, Button } from "@mui/material";

const ButtonActions = () => {
  return (
    <Box>
      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button disabled>Disabled</Button>
        <Button disableElevation>Disabled Elevation</Button>
        <Button disableFocusRipple>Disabled Focus Ripple</Button>
        <Button disableRipple>Disabled Ripple</Button>
      </Box>
    </Box>
  );
};

export default ButtonActions;