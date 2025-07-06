"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import Loader from "@/components/ui/loader";
// import { MessageSent } from "@/components/icons/web";
import { services } from "@/lib/data";
// import useLeads from "@/hooks/useLeads";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  first_name: z.string().min(2, { message: "Nombre obligatorio" }),
  last_name: z.string().min(2, { message: "Apellidos obligatorio" }),
  phone: z
    .string()
    .regex(phoneRegex, "número de teléfono inválido")
    .min(9, { message: "número de teléfono inválido" })
    .max(9, { message: "número de teléfono inválido" }),
  email: z.string().email({ message: "Email obligatorio" }),
  category_id: z.string().min(1, { message: "Servicio obligatorio" }),
});

const NewContactForm = () => {
  //   const { createLeadMutation } = useLeads({});
  const [formSent, setFormSent] = useState(false);

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
      campaign: "web-form",
    };

    // console.log(values);

    // const response = await createLeadMutation.mutateAsync({
    //   body,
    //   categoryId: values.category_id,
    // });

    // if (response) {
    toast.success("Formulario recibido correctamente.");
    form.reset();
    setFormSent(true);
    // }
  };

  return (
    <>
      {formSent ? (
        <div className="border rounded-lg p-10 md:p-16 bg-card dark:bg-background">
          <div className="flex justify-center">
            <div className="mb-4 bg-primary/5 p-2 rounded-full mx-auto">
              <div className="bg-primary/10 p-3 rounded-full mx-auto flex justify-center items-center">
                {/* <MessageSent className="text-primary w-8 h-8 mx-auto" /> */}
              </div>
            </div>
          </div>

          <h3 className="text-center font-bold text-lg pb-2">
            Mensaje recibido
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            En breves nos pondremos en contacto contigo para solventar tus
            problemas.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl className="w-full">
                    <Input {...field} className="text-base sm:text-sm" />
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
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl className="w-full">
                    <Input {...field} className="text-base sm:text-sm" />
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
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl className="w-full">
                    <Input {...field} className="text-base sm:text-sm" />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      type="email"
                      className="text-base sm:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Servicio</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Selecciona</SelectLabel>

                        {services.map((task: any) => (
                          <SelectItem
                            key={task.id}
                            value={
                              process.env.NEXT_PUBLIC_ENV == "prod"
                                ? task.category_id_prod
                                : task.category_id_dev
                            }
                          >
                            {task.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button
                className="w-full"
                type="submit"
                // disabled={createLeadMutation.isPending}
              >
                {/* {createLeadMutation.isPending ? ( */}
                {/* <>
                    <Loader size={16} color="#fff" lineWeight={3.5} />
                    <p className="pl-2">Enviando</p>
                  </>
                ) : ( */}
                <p>Enviar comentario</p>
                {/* )} */}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default NewContactForm;
