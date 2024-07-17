"use client";
import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { Snippet } from "@prisma/client";

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

interface ClientComponentProps {
  snippets: Snippet[];
}

const ClientComponent: React.FC<ClientComponentProps> = ({ snippets }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Button
            color="inherit"
            href={`/snippets/new`}
            sx={{ marginRight: 2 }}
          >
            New
          </Button>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Home Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        {snippets.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <CustomButton
                    href={`/snippets/${item.id}`}
                    variant="contained"
                  >
                    View
                  </CustomButton>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default ClientComponent;
