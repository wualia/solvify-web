export const getPublicSalesAvailability = async (body: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reports/execute/schedule-availability`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();
  return data;
};
