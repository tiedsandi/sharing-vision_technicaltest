export async function loader({ params }) {
  try {
    const res = await fetch(`http://localhost:8080/article/${params.id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }

    const data = await res.json();
    return data;
  } catch {
    throw new Response("Article not found", { status: 404 });
  }
}
