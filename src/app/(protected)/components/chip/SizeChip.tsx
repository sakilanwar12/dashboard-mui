import { Box, Chip } from '@mui/material';

const SizeChip = () => {
  return (
    <Box display="flex" gap="12px" flexWrap="wrap">
      <Chip label="Small" size="small" />
      <Chip label="Small" size="medium" />
    </Box>
  );
};

export default SizeChip;
