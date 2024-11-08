import { Box, Chip } from "@mui/material";

const ColorChip = () => {
  return <Box display="flex" gap="12px" flexWrap="wrap">
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
  </Box>;
};

export default ColorChip;
