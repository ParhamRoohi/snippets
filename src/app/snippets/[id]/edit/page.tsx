import { db } from "@/db";
import { notFound } from "next/navigation";
import EditForm from "@/components/edit-form";
interface editPage { 
  params: {
    id: string;
  };
}

export default async function EditPage(props: editPage) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>
    <EditForm snippet={snippet}/>
  </div>;
}
 