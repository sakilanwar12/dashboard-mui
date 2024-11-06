import { Box, Button, Stack } from "@mui/material";

const VariantButton = () => {
  return (
    <Stack spacing={2}>

      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="danger">
          Danger
        </Button>
      </Box>

 
      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="danger">
          Danger
        </Button>
      </Box>

      <Box display="flex" gap="12px" flexWrap="wrap">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="danger">
          Danger
        </Button>
      </Box>
    </Stack>
  );
};

export default VariantButton;
