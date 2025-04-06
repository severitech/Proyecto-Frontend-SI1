"use client";

import { ColumnDef } from "@tanstack/react-table";

// Este tipo se usa para definir la forma de nuestros datos.
export type Categoria = {
  categoria: string;
  createdAt: string;
};

export type Producto = {
  id: number;
  codigo: string;
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
  estado: "Disponible" | "No Disponible"; // Corregí la palabra "Disponible"
  categoria: Categoria;
};

export const columns: ColumnDef<Producto>[] = [
  {
    accessorKey: "imagen",
    header: "Imagen",
    cell: ({ row }) => (
      <img src={row.getValue("imagen")} alt={row.getValue("nombre")} className="w-5 h-5 object-cover" />
    ), // Mostrar la imagen
  },
  {
    accessorKey: "codigo",
    header: "Codigo",
  },
  {
    accessorKey: "nombre",
    header: "Producto",
  },
  {
    accessorKey: "categoria",
    header: "Tipo",
    cell: ({ row }) => row.getValue("categoria").categoria, // Mostrar solo el nombre de la categoría
  },
  {
    accessorKey: "cantidad",
    header: "Stock",
    cell: ({ row }) => row.getValue("cantidad"),
  },
  {
    accessorKey: "precio",
    header: () => <div className="text-right">Precio</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("precio"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BOB",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <span className={`font-medium ${row.getValue("estado") === "Disponible" ? "text-green-500" : "text-red-500"}`}>
        {row.getValue("estado")}
      </span>
    ),
  },
];
