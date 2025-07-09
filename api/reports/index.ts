export const getNegoAndRevolvingCreditors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reports/execute/creditors-used-for-revolving-negotiation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  return await res.json();
};
