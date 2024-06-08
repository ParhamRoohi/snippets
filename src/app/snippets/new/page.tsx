"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function newSnippetPage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
      <h3>Create new Snippets!</h3>
      <div>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Title"
          className="border 4px"
        />
        <br />
        <br />
        <textarea
          name="code"
          id="code"
          placeholder="Code"
          className="border 4px"
        />
        <br />
        <br />
        {formState.message ? <div>{formState.message}</div> : null}
        <button type="submit" className="border 4px">
          Save
        </button>
      </div>
    </form>
  );
}
