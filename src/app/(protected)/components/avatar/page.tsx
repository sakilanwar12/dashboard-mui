import { Box } from "@mui/material";
import Card from "@/components/ui/CodeSnippet";
import BasicAvatar from "./BasicAvatar";
import LettersAvatar from "./LettersAvatar";
import SizeAvatar from "./SizeAvatar";
import IconAvatar from "./IconAvatar";
import VariantsAvatar from "./VariantsAvatar";
import FallbackAvatar from "./FallbackAvatar";
import GroupedAvatar from "./Grouped";
import TotalAvatars from "./TotalAvatars";
import CustomSurPlus from "./CustomSurPlus";
import SpacingAvatar from "./SpacingAvatar";
const AvatarPage = () => {
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
      <Card title="Image">
        <BasicAvatar />
      </Card>
      <Card title="Letters">
        <LettersAvatar />
      </Card>
      <Card title="Size ">
        <SizeAvatar />
      </Card>
      <Card title="Icon">
        <IconAvatar />
      </Card>
      <Card title="Variant">
        <VariantsAvatar />
      </Card>
      <Card title="Fallback">
        <FallbackAvatar />
      </Card>
      <Card title="Grouped">
        <GroupedAvatar />
      </Card>
      <Card title="Total Avatars">
        <TotalAvatars />
      </Card>
      <Card title="Custom surplus">
        <CustomSurPlus />
      </Card>
      <Card title="Spacing">
        <SpacingAvatar />
      </Card>
    </Box>
  );
};

export default AvatarPage;
