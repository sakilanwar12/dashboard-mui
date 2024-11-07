import { Box, Button, ButtonGroup, Stack } from "@mui/material";
const ButtonGroupSizeColor = () => {
  return (
    <Stack spacing={2} direction="column">
      <Box>
        <ButtonGroup size="small">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup size="medium">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup size="large">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default ButtonGroupSizeColor;
