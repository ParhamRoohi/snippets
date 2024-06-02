import { db } from "@/db";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const render = snippets.map((ithem) => {
    return <div key={ithem.id}>{ithem.title}</div>;
  });
  return <div>{render}</div>;
}
