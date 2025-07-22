const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function loader() {
  const response = await fetch(`${API_URL}/article`);

  if (!response.ok) {
    throw new Response("Failed to load articles", { status: response.status });
  }

  const result = await response.json();
  return result;
}
