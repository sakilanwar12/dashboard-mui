import { Box } from "@mui/material";
import Card from "@/components/ui/CodeSnippet";
import BasicBadge from "./BasicBadge";
import BadgeAvatar from "./BadgeAvatar";
import DotBadge from "./DotBadge";
import BadgePosition from "./BadgePosition";

const BadgePage = () => {
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
      <Card title="Basic">
        <BasicBadge />
      </Card>
      <Card title="Avatar">
        <BadgeAvatar />
      </Card>
      <Card title="Dot Badge">
        <DotBadge />
      </Card>
      <Card title="Badge Position">
        <BadgePosition />
      </Card>
    </Box>
  );
};

export default BadgePage;
