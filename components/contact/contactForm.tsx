"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

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
import { services } from "@/lib/data";
import { MessageSent } from "../icons";
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
  subject: z.string().min(1, { message: "Asunto obligatorio" }),
  message: z.string().min(1, { message: "Mensaje obligatorio" }),
});

const NewContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const body = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    };

    const response = await fetch("/api/emails/contact", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (response.ok) {
      toast.success("Formulario recibido correctamente.");
      form.reset();
      setFormSent(true);
      setLoading(false);
    } else {
      toast.error("Error al enviar el formulario.");
      setLoading(false);
    }
  };

  return (
    <>
      {formSent ? (
        <div className="rounded-lg p-10 md:p-16 bg-card">
          <div className="flex justify-center">
            <div className="mb-4 bg-primary/5 p-2 rounded-full mx-auto">
              <div className="bg-primary/10 p-3 rounded-full mx-auto flex justify-center items-center">
                <MessageSent className="text-primary w-8 h-8 mx-auto" />
              </div>
            </div>
          </div>

          <h3 className="text-center font-bold text-lg pb-2">
            Mensaje recibido
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-300">
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>En que te podemos ayudar?</FormLabel>
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

                        {services.map((service: any) => (
                          <SelectItem key={service.id} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader size={16} color="#fff" lineWeight={3.5} />
                    <p className="pl-2">Enviando</p>
                  </>
                ) : (
                  <p>Enviar comentario</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default NewContactForm;
