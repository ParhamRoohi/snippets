import { db } from "@/db";
import { redirect} from "next/navigation";
export default function newSnippetPage() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    redirect("/");
  }

  return (
    <form action={createSnippet}>
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
        <button type="submit" className="border 4px">
          Save
        </button>
      </div>
    </form>
  );
}
