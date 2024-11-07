import { Box, Button, ButtonGroup, Stack } from "@mui/material";

const VerticalButtonGroup = () => {
  return (
    <Stack spacing={2} direction="row">
      <Box>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup variant="outlined" orientation="vertical">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup variant="text" orientation="vertical">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default VerticalButtonGroup;
