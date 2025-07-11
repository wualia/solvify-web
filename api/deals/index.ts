export const editDealStatus = async ({ body, lead_id, deal_id }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/leads/${lead_id}/deals/${deal_id}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
};

export const getDealByIdPublic = async (deal_id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/leads/${deal_id}/deals/${deal_id}`,
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
