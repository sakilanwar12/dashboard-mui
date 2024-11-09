import Card from "@/components/ui/CodeSnippet";
import { Box } from "@mui/material";
import BasicAccordion from "./BasicAccordion";
import AccordionExpandIcon from "./AccordionExpandIcon";
import ExpandedAccordion from "./ExpandedAccordion";
import DisabledAccordion from "./DisabledAccordion";
import ControlledAccordions from "./ControlledAccordion";
import AccordionAction from "./AccordionAction";
const AccordionPage = () => {
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
        <BasicAccordion />
      </Card>
      <Card title="Control Expand Icon">
        <AccordionExpandIcon />
      </Card>
      <Card title="Expanded Accordion">
        <ExpandedAccordion />
      </Card>
      <Card title="Disabled Item">
        <DisabledAccordion />
      </Card>
      <Card title="Controlled Accordion">
        <ControlledAccordions />
      </Card>
      <Card title=" Accordion Action">
        <AccordionAction />
      </Card>
    </Box>
  );
};

export default AccordionPage;
