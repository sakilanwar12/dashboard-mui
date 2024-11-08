import { Box, Chip } from '@mui/material';

const ColorChip = () => {
  return (
    <Box display="flex" gap="12px" flexWrap="wrap">
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
      <Chip label="Error" color="error" />
    </Box>
  );
};

export default ColorChip;
