import { Box } from "@mui/material";
import Card from "@/components/ui/CodeSnippet";
import BasicList from "./BasicList";
import DanseList from "./DanseList";

const ListPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 2,
      }}
    >
      <Card title="Basic">
        <BasicList />
      </Card>
      <Card title="Dense">
        <DanseList />
      </Card>
    </Box>
  );
};

export default ListPage;
