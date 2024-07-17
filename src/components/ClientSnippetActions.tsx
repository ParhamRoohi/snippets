"use client";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import * as React from "react";
import Button from "@mui/material/Button";
import * as actions from "@/actions";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function SimpleAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}

interface ClientSnippetActionsProps {
  snippetId: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: "#212121",
    },
  },
});

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export function ClientSnippetActions({ snippetId }: ClientSnippetActionsProps) {
  const handleDelete = async () => {

    await actions.DeleteSnippet(snippetId);
  };

  return (
    <ThemeProvider theme={theme}>
      <br />
      <CustomButton href={`/snippets/${snippetId}/edit`} sx={{ marginBottom: 2 }}>
        Edit
      </CustomButton>
      <br />
      <CustomButton onClick={handleDelete} sx={{ marginBottom: 2 }}>
        Delete
      </CustomButton>
    </ThemeProvider>
  );
}
