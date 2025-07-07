"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createLead } from "@/api/leads";

export const useCreateLeadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ body, category_id }: any) =>
      createLead({
        category_id,
        body,
      }),
    onSuccess: (data) => {},
  });
};
