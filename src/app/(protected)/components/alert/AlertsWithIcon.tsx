import { Alert, Stack } from "@mui/material";
import { CheckIcon } from "lucide-react";

const AlertsWithIcon = () => {
  return (
    <Stack spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This success Alert has a custom icon.
      </Alert>
      <Alert icon={false} severity="success">
        This success Alert has no icon.
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckIcon fontSize="inherit" />,
        }}
      >
        This success Alert uses `iconMapping` to override the default icon.
      </Alert>
    </Stack>
  );
};

export default AlertsWithIcon;
