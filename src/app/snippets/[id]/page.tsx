import { db } from "@/db";
import { notFound } from "next/navigation";
import * as actions from "@/actions";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

interface showSnippetProps {
  params: {
    id: string;
  };
}
export default async function showSnippet(props: any) {
  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }
const deleteSnipetAction = actions.deleteSnipet.bind(null,snippet.id);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {snippet.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
      <br />
      <form action={deleteSnipetAction}>
      <button>Delete</button>
      </form>
      <div>
        <code>{snippet.code}</code>
      </div>
    </>
  ); 
}
