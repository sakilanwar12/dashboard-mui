import { Box, Chip } from '@mui/material';

const ChipVariant = () => {
  return (
    <Box display="flex" gap="12px" flexWrap="wrap">
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Box>
  );
};

export default ChipVariant;
