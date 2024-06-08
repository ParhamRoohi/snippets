import { db } from "@/db";
import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const render = snippets.map((ithem) => {
    return (
      <Link key={ithem.id} href={`/snippets/${ithem.id}`} color="inherit">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ithem.title}View
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  });
  return (
    <div>
      <Button variant="outlined" href={`/snippets/new`}>
        New
      </Button>
      <div>{render}</div>
    </div>
  );
}
