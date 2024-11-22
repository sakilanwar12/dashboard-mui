import { Typography } from "@mui/material";

const GroupLabel = ({ children }: { children: React.ReactNode }) => {
  return <Typography variant="body2" color="text.secondary" component="h6">{children}</Typography>;
};

export default GroupLabel;
