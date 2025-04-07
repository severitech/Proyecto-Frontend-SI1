import { columns, Producto } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { toast } from "sonner";
import FormularioProducto from "./components/formularioProducto";

async function getData(): Promise<Producto[]> {
  //datos obtenidos del backend
  const response = await fetch("http://localhost:5000/api/productos");
  if (!response.ok) {
    toast.error("error al cargar los datos");
  }
  const data: Producto[] = await response.json();
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 ">
      <section className="flex gap-3">
      <FormularioProducto />
        
      </section>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
