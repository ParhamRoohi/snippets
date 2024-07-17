"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900], 
    }}
});
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));



export default function NewSnippetPage() {
  const [formState, action] = useFormState(actions.CreateSnippet, {
    message: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <form action={action}>
        <h3>Create new Snippets!</h3>
        <div>
          <TextField
            name="title"
            id="title"
            placeholder="Title"
            label="Title"
            multiline
            maxRows={4}
          />
          <br />
          <br />
          <TextField
            name="code"
            id="code"
            placeholder="Code"
            label="Code"
            multiline
            rows={4}
          />
          <br />
          <br />
          {formState.message ? <div>{formState.message}</div> : null}
          <CustomButton type="submit" variant="contained">
            Save
          </CustomButton>
        </div>
      </form>
    </ThemeProvider>
  );
}
