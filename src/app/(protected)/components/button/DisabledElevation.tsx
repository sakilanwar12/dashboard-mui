import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const DisabledElevation = () => {
  return (
    <ButtonGroup disableElevation variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
};

export default DisabledElevation;
