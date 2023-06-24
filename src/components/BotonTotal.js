import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BotonTotal() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Check out
      </Button>
    </Stack>
  );
}
