export const createLead = async ({ body, category_id }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/leads/${category_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
};

export const getLeadById = async ({ category_id, lead_id }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/leads/${category_id}/search?lead_id=${lead_id}&extended=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  return await res.json();
};
