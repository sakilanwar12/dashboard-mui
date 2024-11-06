import Card from "@/components/ui/CodeSnippet";
import BasicButton from "./BasicButton";
import SizeButton from "./SizeButton";
import VariantButton from "./VariantButton";
import ButtonActions from "./ButtonActions";
import LinkButton from "./LinkButton";
import IconButton from "./IconButton";
import {  Stack } from "@mui/material";

const ButtonPage = () => {
  return (
    <Stack>
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
          <IconButton />
        </Card>
    </Stack>
  );
};

export default ButtonPage;
