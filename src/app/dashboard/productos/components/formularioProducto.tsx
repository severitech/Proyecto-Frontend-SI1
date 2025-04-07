"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "@/components/combo-box";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const productoSchema = z.object({
  codigo: z
    .string({
      required_error: "El código es requerido ",
    })
    .min(3),
  nombre: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(3),
  precio: z
    .string({
      required_error:
        "El precio es requerido",
    })
    .min(1)
    .transform((val) => parseInt(val)),
  categoria: z.string({
    required_error:
      "La categoria es requerida",
  }).min(5),
});

function FormularioProducto() {
  const form = useForm({
    defaultValues: {
      codigo: "",
      nombre: "",
      precio: "",
      categoria: "",
    },
    resolver: zodResolver(productoSchema),
  });

  const onSubmit_evente = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-blue-800 hover:bg-blue-950">
            Crear Nuevo Producto
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] ">
          <DialogHeader>
            <DialogTitle>Crear nuevo producto</DialogTitle>
            <DialogDescription>
              Agrega nuevos productos al inventario. Completa todos los campos
              requeridos y haz clic en Guardar cuando hayas terminado.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={onSubmit_evente}
              className="grid gap-4 grid-cols-1 py-4"
            >
              <div className="flex flex-col  gap-1">
                <FormField
                  name="codigo"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="codigo" className="text-up">
                        Codigo
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="P001" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormField
                  name="nombre"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="nombre" className="text-up">
                        Nombre
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Cerveza Paceña"
                          {...field}
                        />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormField
                  name="precio"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="precio" className="text-up">
                        Precio
                      </FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormField
                  name="imagen"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="Imagen" className="text-up">
                        Imagen
                      </FormLabel>
                      <FormControl>
                        <Input type="file" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="categoria"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="Categoria"
                        className="text-sm font-medium"
                      >
                        Categoría
                      </FormLabel>
                      <FormControl>
                        <ComboboxDemo
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                     
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter>
                <Button type="submit">Guardar Producto</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormularioProducto;
