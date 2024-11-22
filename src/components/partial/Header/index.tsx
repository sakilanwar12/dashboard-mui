"use client"

import { Card, CardContent } from "@mui/material";

const Header = () => {

  return (
    <Card component="header" sx={{mt:"16px"}}>
      <CardContent component="nav" color="default"  >
        Header
      </CardContent>
    </Card>
  );
};

export default Header;
