"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useFormStore } from "@/store/form";
import Loader from "@/components/ui/loader";

const deudaSchema = z.object({
  nombre_acreedor: z.string(),
  total_contrato: z.coerce.number().positive({
    message: "Importe mayor a 0.",
  }),
});

const NuevoAcreedorForm = ({ creditors }: any) => {
  const { addCreditor } = useFormStore();

  const form = useForm<z.infer<typeof deudaSchema>>({
    resolver: zodResolver(deudaSchema),
    defaultValues: {
      nombre_acreedor: "",
      total_contrato: 0,
    },
  });

  const [open, setOpen] = React.useState(false);

  const onSubmit = (values: z.infer<typeof deudaSchema>) => {
    const creditor = creditors.find(
      (creditor: any) => creditor.name === values.nombre_acreedor
    );

    addCreditor({
      name: values.nombre_acreedor,
      total_contrato: values.total_contrato,
      tipo_acreedor: creditor?.creditor_type,
      descuento: creditor?.deal_discount,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        id="form-new-deuda"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row md:space-x-2 md:items-end justify-between space-y-4 md:space-y-0"
      >
        <FormField
          control={form.control}
          name="nombre_acreedor"
          render={({ field }) => (
            <FormItem className="w-[410px] flex flex-col space-y-4">
              <FormLabel>Selecciona un acreedor del listado</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-wull justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? creditors?.find(
                            (creditor: any) => creditor.name === field.value
                          )?.name
                        : "Secciona un acreedor"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[410px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar acreedor..." />
                    <CommandList>
                      <CommandEmpty>
                        {creditors?.isPending ? (
                          <Loader />
                        ) : (
                          <p>No se han encontrado acreedores.</p>
                        )}
                      </CommandEmpty>
                      <CommandGroup>
                        {creditors
                          ?.filter(
                            (creditor: any) => creditor.creditor_type != null
                          )
                          ?.sort((a: any, b: any) =>
                            a.name.localeCompare(b.name)
                          )
                          .map((creditor: any) => (
                            <CommandItem
                              value={creditor.name}
                              key={creditor.id}
                              onSelect={() => {
                                form.setValue("nombre_acreedor", creditor.name);
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  creditor.name === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {creditor.name}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-2 items-end">
          <FormField
            control={form.control}
            name="total_contrato"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                <FormLabel>Importe total</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="text-base sm:text-sm text-right bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" form="form-new-deuda" className="w-auto">
            Añadir acreedor
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NuevoAcreedorForm;
