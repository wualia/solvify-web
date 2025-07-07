export const createPublicTask = async ({
  body,
  object_reference_type,
  object_reference_id,
  annotation_id,
}: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/annotations/${object_reference_type}/${object_reference_id}/${annotation_id}/tasks`,
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
  } catch (error) {
    console.error(error);
  }
};
