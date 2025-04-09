"use client"
import { ColumnDef } from "@tanstack/react-table";
import { AlertDialogDemo } from "./dialog-confirmacion";
import FormularioProducto from "@/app/dashboard/productos/components/formularioProducto";

// Tipo de Producto y Categoria
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
  estado: "Disponible" | "No Disponible";
  categoria: Categoria;
};

export const columns: ColumnDef<Producto>[] = [
  {
    accessorKey: "Editar",
    header: "Acción",
    cell: ({ row }) => {
      const producto = row.original;  // Aquí obtienes los datos del producto
  
      return (
        <div className="flex gap-0.5">
          {/* Formulario para editar el producto */}
          <FormularioProducto
            datos={{
              id: producto.id,
              codigo: producto.codigo,
              nombre: producto.nombre,
              precio: producto.precio,
              imagen: producto.imagen ?? "", // Asegúrate de que 'imagen' no sea null
              categoria: producto.categoria.categoria,
              cantidad: producto.cantidad
            }}
            esNuevoProducto={false} // Esto indica que es para editar el producto
          />
  
          {/* Alert Dialog para cambiar el estado del producto */}
          <AlertDialogDemo
            titulo="¿Está seguro de cambiar el estado del producto?"
            descripcion="Se cambiará el estado del producto"
          />
        </div>
      );
    },
  },
  
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <span
        className={`font-medium ${
          row.getValue("estado") === "Disponible"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {row.getValue("estado")}
      </span>
    ),
  },
  {
    accessorKey: "codigo",
    header: "Código",
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
];
