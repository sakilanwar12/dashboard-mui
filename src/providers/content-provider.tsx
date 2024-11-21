import { Box } from "@mui/material";

const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ ml:"328px" }}> {children}</Box>;
};

export default ContentProvider;
