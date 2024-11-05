import { Box, Button } from "@mui/material";

const BasicButton = () => {
  return (
    <Box>
      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="info">Info</Button>
        <Button color="danger">Danger</Button>
      </Box>
      <Box display="flex" gap="12px" flexWrap="wrap" sx={{mt:2}}>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="info">Info</Button>
        <Button color="danger">Danger</Button>
      </Box>
    </Box>
  );
};

export default BasicButton;
