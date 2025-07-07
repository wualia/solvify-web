export const createContact = async ({ body }: any) => {
  const res = await fetch(`/api/emails/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
