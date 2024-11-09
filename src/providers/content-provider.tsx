import { Box, Container } from "@mui/material";
import React from "react";

const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Box sx={{ mt:10,mb: 2 }}> {children}</Box>
    </Container>
  );
};

export default ContentProvider;
