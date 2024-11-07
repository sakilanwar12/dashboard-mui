import Card from "@/components/ui/CodeSnippet";
import BasicButton from "./BasicButton";
import SizeButton from "./SizeButton";
import VariantButton from "./VariantButton";
import ButtonActions from "./ButtonActions";
import LinkButton from "./LinkButton";
import { Box } from "@mui/material";
import WithIconButton from "./WithIconButton";
import BasicButtonGroup from "./BasicButtonGroup";
import ButtonGroupSizeColor from "./ButtonGroupSizeColor";
import VerticalButtonGroup from "./VerticalButton";
import SplitButton from "./SplitButton";
import DisabledElevation from "./DisabledElevation";

const ButtonPage = () => {
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
        <BasicButton />
      </Card>
      <Card title="Variant">
        <VariantButton />
      </Card>
      <Card title="Actions">
        <ButtonActions />
      </Card>
      <Card title="Size">
        <SizeButton />
      </Card>
      <Card title="Link ">
        <LinkButton />
      </Card>
      <Card title="Icon ">
        <WithIconButton />
      </Card>
      <Card title="Button Group">
        <BasicButtonGroup />
      </Card>
      <Card title="Button Group Size & Color">
        <ButtonGroupSizeColor />
      </Card>
      <Card title="Vertical Button">
        <VerticalButtonGroup />
      </Card>
      <Card title="Split Button">
        <SplitButton />
      </Card>
      <Card title="Disabled Elevation">
        <DisabledElevation />
      </Card>
    </Box>
  );
};

export default ButtonPage;
