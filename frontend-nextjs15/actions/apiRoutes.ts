export const fetchData = async (req: { url: string }) => {
  const { url } = req;
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
  const response = await fetch(fullUrl);
  return await response.json(); 
}