export async function fetchPage(page = "") {
  const res = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({ page }) || null,
    headers: { "content-type": "application/json" },
  });
  return res.json();
}
