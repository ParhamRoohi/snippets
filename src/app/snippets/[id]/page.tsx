import { db } from "@/db";
import { notFound } from "next/navigation";
import * as React from "react";
import Box from "@mui/material/Box";
import { ClientSnippetActions } from "@/components/ClientSnippetActions";

interface showSnippetProps {
  params: {
    id: string;
  };
}
export default async function ShowSnippet(props: showSnippetProps) {
  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        Titel: {snippet.title}
        <br />
        Code: {snippet.code}
      </Box>
      <ClientSnippetActions snippetId={snippet.id} />
    </>
  );
}
