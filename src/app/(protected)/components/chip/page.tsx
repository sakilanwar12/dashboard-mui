import Card from "@/components/ui/CodeSnippet";
import { Box } from "@mui/material";
import ColorChip from "./ColorChip";

const ChipPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        },
        gap: 2,
      }}
    >
      <Card title="Color">
        <ColorChip />
      </Card>

      {/* 
      incomplete :   Clickable and deletable 
      */}
    </Box>
  );
};

export default ChipPage;
