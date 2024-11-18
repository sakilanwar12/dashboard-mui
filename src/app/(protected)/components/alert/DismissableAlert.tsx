"use client";
import { Alert, Stack } from "@mui/material";
import { useState } from "react";

const DismissableAlert: React.FC = () => {
  const [openWarning, setOpenWarning] = useState<boolean>(true);
  const [openSuccess, setOpenSuccess] = useState<boolean>(true);
  const [openInfo, setOpenInfo] = useState<boolean>(true);
  const [openError, setOpenError] = useState<boolean>(true);

  return (
    <Stack spacing={2}>
      {openWarning && (
        <Alert severity="warning" onClose={() => setOpenWarning(false)}>
          This Alert displays the default close icon.
        </Alert>
      )}
      {openSuccess && (
        <Alert severity="success" onClose={() => setOpenSuccess(false)}>
          This is a success Alert.
        </Alert>
      )}
      {openInfo && (
        <Alert severity="info" onClose={() => setOpenInfo(false)}>
          This is an info Alert.
        </Alert>
      )}
      {openError && (
        <Alert severity="error" onClose={() => setOpenError(false)}>
          This is an error Alert.
        </Alert>
      )}
    </Stack>
  );
};

export default DismissableAlert;
