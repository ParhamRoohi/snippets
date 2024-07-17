"use client";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";

interface EditFormProps {
  snippet: Snippet;
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

export default function EditForm({ snippet }: EditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const editAction = actions.EditSnippet.bind(null, snippet.id, code);

  return (
    <ThemeProvider theme={theme}>
      <form action={editAction}>
        <TextField
          id="code-editor"
          label="Code"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={code}
          onChange={handleEdit}
          sx={{ marginBottom: 2 }}
        />
        <CustomButton variant="contained" type="submit">
          Save
        </CustomButton>
      </form>
    </ThemeProvider>
  );
}
