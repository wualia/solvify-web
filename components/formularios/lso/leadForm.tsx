"use client";

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
// import useLeads from "@/app/hooks/useLeads";
// import { DealStore } from "@/app/store/deals";
// import useCategories from "@/app/hooks/useCategories";
// import { getLeadById } from "@/api/leads";
import Loader from "@/components/ui/loader";
import { useFormStore } from "@/store/form";
import { useCreateLeadMutation } from "@/hooks/useLeads";
import { getCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";
import { getLeadById } from "@/api/leads";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  first_name: z.string().min(2, { message: "Nombre obligatorio" }),
  last_name: z.string().min(2, { message: "Nombre obligatorio" }),
  phone: z
    .string()
    .regex(phoneRegex, "número de teléfono inválido")
    .min(9, { message: "número de teléfono inválido" })
    .max(9, { message: "número de teléfono inválido" }),
  email: z.string().email({ message: "Email obligatorio" }),
});

const LeadForm = () => {
  const router = useRouter();
  const { setLead, setDeal } = useFormStore();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const categoryId = categories?.find((item: any) => item.slug == "lso")?.id;

  const { mutateAsync: createLeadMutation, isPending } =
    useCreateLeadMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const body = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone: values.phone,
      channel: "web",
      campaign: "web",
    };

    const response = await createLeadMutation({
      body,
      category_id: categoryId,
    });

    setLead(response);

    const leadDeals = await getLeadById({
      category_id: response.category_id,
      lead_id: response.id,
    });

    setDeal(leadDeals[0].deals[0]);

    form.reset();
    router.push(`/formulario/ley-de-segunda-oportunidad/completado`);
  };

  return (
    <>
      <div className="mt-4 mx-auto max-w-2xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-left max-w-lg mx-auto"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-base sm:text-sm"
                      placeholder="Nombre"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-base sm:text-sm"
                      placeholder="Apellidos"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-base sm:text-sm"
                      placeholder="Teléfono"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="text-base sm:text-sm"
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button className="w-full" type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader size={14} color="#fff" lineWeight={3.5} />
                    <p className="pl-2">Enviando</p>
                  </>
                ) : (
                  <p>Enviar datos</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LeadForm;
