import Card from "@/components/ui/CodeSnippet";
import { Box } from "@mui/material";
import BasicAlert from "./BasicAlert";
import OutlineAlert from "./OutlineAlert";
import DismissableAlert from "./DismissableAlert";
import AlertsWithIcon from "./AlertsWithIcon";
import AlertWithTitle from "./AlertWithTitle";

const AlertPage = () => {
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
        <BasicAlert />
      </Card>
      <Card title="Outline">
        <OutlineAlert />
      </Card>
      <Card title="Dismissible">
        <DismissableAlert />
      </Card>
      <Card title="Alerts with Icon">
        <AlertsWithIcon />
      </Card>
      <Card title="Alerts with Title">
        <AlertWithTitle />
      </Card>
    </Box>
  );
};

export default AlertPage;
