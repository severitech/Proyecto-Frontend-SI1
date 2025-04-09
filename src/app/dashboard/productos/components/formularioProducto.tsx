"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormularioEditarCrear, { FormValues } from "./formularioEditarCrear";
import { PencilIcon } from "lucide-react";

// Esquema de validación con Zod


function FormularioProducto({
  datos,
  esNuevoProducto,
}: {
  datos: FormValues;
  esNuevoProducto: boolean;
}) {
 

  // const onSubmit_evente = form.handleSubmit((values) => {
  //   console.log(values);
  // });

  return (
    <div>
      <Dialog>
        {/* No es necesario usar `if` dentro del JSX, usa un ternario directamente */}
        {esNuevoProducto ? (
          <DialogTrigger asChild>
            <Button variant="default" className="bg-blue-800 hover:bg-blue-950">
              Crear Nuevo Producto
            </Button>
          </DialogTrigger>
        ) : (
          <DialogTrigger asChild>
            <Button size="icon" className="bg-amber-700 text-white">
              <PencilIcon className="h-4 w-4" />
            </Button>
          </DialogTrigger>
        )}

        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>
              {esNuevoProducto ? "Crear Nuevo Producto" : "Editar Producto"}
            </DialogTitle>
            <DialogDescription>
              {esNuevoProducto
                ? "Agrega nuevos productos al inventario. Completa todos los campos requeridos y haz clic en Guardar cuando hayas terminado."
                : "Edita los detalles de este producto."}
            </DialogDescription>
          </DialogHeader>
          {/* Aquí pasa los datos y la variable esNuevoProducto a FormularioEditarCrear */}
          <FormularioEditarCrear
            datos={datos}
            esNuevoProducto={esNuevoProducto}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormularioProducto;
