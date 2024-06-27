"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface EditFormProps {
  snippet: Snippet;
}
export default function EditForm({ snippet }: EditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEdit = (defaultValue: string = " ") => {
    setCode(defaultValue);
  };

  const editAction = actions.EditSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEdit}
      />
       <form action={editAction}>
        <button type="submit">Save</button>
       </form>
    </div>
  );
}
