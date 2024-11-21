import { Box } from "@mui/material";
import Card from "@/components/ui/CodeSnippet";
import BasicBreadcrumb from "./BasicBreadcrumb";
import ActiveLast from "./ActiveLast";
import CustomSeparator from "./CustomSeparator";
import BreadcrumbsWithIcon from "./BreadcrumbsWithIcon";
import CollapsedBreadcrumb from "./CollapsedBreadcrumb";
import CondensedWithMenu from "./CondensedMenu";
import CustomizedBreadcrumbs from "./CustomizedBreadcrumb";

const BreadcrumbPage = () => {
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
        <BasicBreadcrumb />
      </Card>
      <Card title="Active Last Breadcrumb">
        <ActiveLast />
      </Card>
      <Card title="Custom Seprator">
        <CustomSeparator />
      </Card>
      <Card title="Breadcrumbs with Icon">
        <BreadcrumbsWithIcon />
      </Card>
      <Card title="Collapsed Breadcrumb">
        <CollapsedBreadcrumb />
      </Card>
      <Card title="Condensed with Menu">
        <CondensedWithMenu />
      </Card>
      <Card title="Customized Breadcrumb">
        <CustomizedBreadcrumbs />
      </Card>
    </Box>
  );
};

export default BreadcrumbPage;
