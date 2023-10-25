export async function fetchContent(id: string) {
  const res = await fetch(`/api/article/${id}`);
  return res.json();
}
