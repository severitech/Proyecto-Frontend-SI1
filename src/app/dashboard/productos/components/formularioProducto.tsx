import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboboxDemo } from "@/components/combo-box";
function FormularioProducto() {
  return (
    <form className="grid gap-4 grid-cols-1 py-4">
      <div className="flex flex-col  gap-1">
        <Label htmlFor="codigo" className="text-up">
          Código:
        </Label>
        <Input id="codigo" className="col-span-3" />
      </div>
      <div className="flex flex-col  gap-1">
        <Label htmlFor="Producto" className="text-right">
          Producto:
        </Label>
        <Input id="Producto" placeholder="" className="col-span-3" />
      </div>
      <div className="flex flex-col  gap-1">
        <Label htmlFor="Precio" className="text-right">
          Precio:
        </Label>
        <Input
          id="Precio"
          placeholder="0.00"
          type="number"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col  gap-1">
        <Label htmlFor="Imagen" className="text-right">
          Imagen:
        </Label>
        <Input
          id="Imagen"
          placeholder="0.00"
          type="file"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col  gap-1">
        <Label htmlFor="Categoria" className="text-right">
          Categoria:
        </Label>
        <ComboboxDemo></ComboboxDemo>
      </div>
    </form>
  );
}

export default FormularioProducto;
