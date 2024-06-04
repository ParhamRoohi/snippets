"use Client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";


interface editForm {
  snippet: Snippet;
}
export default function editForm({ snippet }: editForm) {
  return <div>{snippet.title}</div>;
}
