import { Alert, Stack } from "@mui/material";

const BasicAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
    </Stack>
  );
};

export default BasicAlert;
