import { Box, Button, Stack } from "@mui/material";
import React from "react";

const SizeButton = () => {
  return (
    <Stack spacing={2}>
      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button size="small">Primary</Button>
        <Button size="medium">Primary</Button>
        <Button size="large">Primary</Button>
      </Box>
      <Box display="flex" gap="12px" flexWrap="wrap" maxWidth={300}>
        <Button fullWidth>Full Width</Button>
      </Box>
    </Stack>
  );
};

export default SizeButton;
