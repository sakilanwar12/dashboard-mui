import { Box, Button } from "@mui/material";

const LinkButton = () => {
  return (
      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button href="#">Primary</Button>
        <Button color="secondary"  href="#">Secondary</Button>
        <Button color="success"  href="#">Success</Button>
        <Button color="warning"  href="#">Warning</Button>
        <Button color="info"  href="#">Info</Button>
        <Button color="error"  href="#">Error</Button>
      </Box>
  );
};

export default LinkButton;
