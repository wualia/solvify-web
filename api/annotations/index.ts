export const getPublicAnnotationsByDeal = async ({
  object_reference_type,
  object_reference_id,
}: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/annotations/${object_reference_type}/${object_reference_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }
    );

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
