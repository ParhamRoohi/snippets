
import { db } from "@/db";
import ClientComponent from "@/components/ClientComponent"; // Import the client-side component
import type { Snippet } from "@prisma/client";

export default async function Home() {
  const snippets: Snippet[] = await db.snippet.findMany();

  return <ClientComponent snippets={snippets} />;
}
