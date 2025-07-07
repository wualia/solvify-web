"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { MessageSent } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea";

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
// import { useMutation } from "@tanstack/react-query";
import { createContact } from "@/api/contacts/index";
import { Card, CardContent } from "@/components/ui/card";
import Loader from "@/components/ui/loader";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
});

const DeleteAccountForm = () => {
  const [formSent, setFormSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  //  const mutation = useMutation({
  //   //   mutationFn: (body: any) =>
  //   //     createContact({
  //   //       body,
  //   //     }),

  //   //   onSuccess() {
  //   //     toast.success("Formulario recibido correctamente.");
  //   //     form.reset();
  //   //     setFormSent(true);
  //   //   },
  //   });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // const body = {
    //   ...values,
    //   user_id: profile ? profile.id : null,
    //   company_id: null,
    // };
    // mutation.mutate(body);
  }

  return (
    <div>
      <>
        {formSent ? (
          <div className="border rounded-lg p-10 md:p-16 bg-white dark:bg-gray-800 dark:border-gray-700">
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
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              En breves nos pondremos en contacto contigo eliminar la cuenta.
            </p>
          </div>
        ) : (
          <Card>
            <CardContent className="p-8">
              {" "}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="text-base sm:text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>

                  <>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="text-base sm:text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>

                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
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
                  </>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Motivo</FormLabel>
                        <FormControl>
                          <Textarea className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      className="w-full"
                      type="submit"
                      // disabled={mutation.isPending}
                    >
                      {/* {mutation.isPending ? (
                        <>
                          <Loader size={16} color="#fff" lineWeight={3.5} />
                          <p className="pl-2">Enviando</p>
                        </>
                      ) : ( */}
                      <p>Enviar petición</p>
                      {/* )} */}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </>
    </div>
  );
};

export default DeleteAccountForm;
