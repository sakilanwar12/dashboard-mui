import { Box } from "@mui/material";

const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ ml:"310px",mr:"20px",my:'16px' }}> {children}</Box>;
};

export default ContentProvider;
