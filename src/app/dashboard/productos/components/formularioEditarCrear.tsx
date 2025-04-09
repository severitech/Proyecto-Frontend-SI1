"use client";
import { ComboboxDemo } from "@/components/combo-box";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./InputForm";
export type FormValues = {
  id: number;
  codigo: string;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string | null;
  categoria: string;
};
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
      required_error: "El precio es requerido",
    })
    .min(1)
    .transform((val) => parseFloat(val)) // Convierte el valor en string a un float
    .refine((val) => !isNaN(val), {
      message: "El precio debe ser un número válido",
    }), // Valida que sea mayor que 0
  categoria: z
    .string({
      required_error: "La categoría es requerida",
    })
    .min(5),
  cantidad: z
    .string({
      required_error: "La cantidad es requerida",
    })
    .min(1)
    .transform((val) => parseInt(val)) // Convierte la cantidad a float
    .refine((val) => !isNaN(val), {
      message: "La cantidad debe ser un número válido",
    }),
});

//function FormularioEditarCrear({ codigo,nombre,precio,categoria }: { codigo: string; nombre:string; precio:number;categoria:string
function FormularioEditarCrear({
  datos,
  esNuevoProducto,
}: {
  datos: FormValues;
  esNuevoProducto: boolean;
}) {
  // Configura el formulario con los valores predeterminados del producto
  const form = useForm<FormValues>({
    defaultValues: datos,
    resolver: zodResolver(productoSchema),
  });
  // Función que maneja el envío del formulario
  const onSubmit = (data: FormValues) => {
    if (esNuevoProducto) {
      console.log("es nuevo producto:", data);
    } else {
      console.log("es producto para editar :", data);
    }
  };
  // Aquí agregas la lógica para guardar o procesar los datos del formulario
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-y-4 py-4"
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
          <FormInput
            name="codigo"
            control={form.control}
            label="Código"
            type="text"
            placeholder="P001"
            defaultValue={datos.codigo}
          />
          <FormInput
            name="nombre"
            control={form.control}
            label="Nombre"
            type="text"
            placeholder="Cerveza Paceña"
            defaultValue={datos.nombre}
          />
          <FormInput
            name="precio"
            control={form.control}
            label="Precio"
            type="number"
            placeholder="100"
            defaultValue={datos.precio}
          />
          <FormInput
            name="cantidad"
            control={form.control}
            label="Cantida en Stock"
            type="number"
            placeholder="1"
            defaultValue={datos.cantidad}
          />
          <FormInput
            name="imagen"
            control={form.control}
            label="Imagen"
            type="text"
            placeholder="URL de la imagen"
            defaultValue={datos.imagen || ""}
          />

          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="categoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="categoria"
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
        </div>
        <DialogFooter className="">
          <Button type="submit">Guardar Producto</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

export default FormularioEditarCrear;
