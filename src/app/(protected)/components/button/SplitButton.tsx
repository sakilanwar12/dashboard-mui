import { Box, Button, ButtonGroup } from "@mui/material";
import { ChevronDown } from "lucide-react";

const SplitButton = () => {
  return (
    <Box display="flex" gap="12px" flexWrap="wrap">
      <ButtonGroup variant="contained" color="primary">
        <Button>Primary </Button>
        <Button size="small">
          <ChevronDown size={16} />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="secondary">
        <Button>Secondary</Button>
        <Button size="small">
          <ChevronDown size={16} />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="info">
        <Button>Info</Button>
        <Button size="small">
          <ChevronDown size={16} />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="warning">
        <Button>Warning </Button>
        <Button size="small">
          <ChevronDown size={16} />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="success">
        <Button>Success </Button>
        <Button size="small">
          <ChevronDown size={16} />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="error">
        <Button>Error </Button>
        <Button size="small">
          <ChevronDown size={16} />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default SplitButton;
