import Card from '@/components/ui/CodeSnippet';
import { Box } from '@mui/material';
import ColorChip from './ColorChip';
import SizeChip from './SizeChip';
import ChipVariant from './ChipVariant';

const ChipPage = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        },
        gap: 2,
      }}
    >
      <Card title="Color">
        <ColorChip />
      </Card>
      <Card title="Sizes">
        <SizeChip />
      </Card>
      <Card title="Variant">
        <ChipVariant />
      </Card>
    </Box>
  );
};

export default ChipPage;
