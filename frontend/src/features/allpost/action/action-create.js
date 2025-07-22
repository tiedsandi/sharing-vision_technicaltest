import { redirect } from "react-router";

export async function action({ request }) {
  const formData = await request.formData();

  const payload = {
    title: formData.get("title"),
    content: formData.get("content"),
    category: formData.get("category"),
    status: formData.get("status"),
  };

  try {
    const res = await fetch(`http://localhost:8080/article`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.details || "Failed to create article");
    }

    return redirect("/article");
  } catch (error) {
    return { error: error.message };
  }
}
