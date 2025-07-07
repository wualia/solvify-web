export const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
