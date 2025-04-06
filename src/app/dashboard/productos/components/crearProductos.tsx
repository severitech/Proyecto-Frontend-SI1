import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FormularioProducto from "./formularioProducto"

export default function CrearProductos() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-blue-800 hover:bg-blue-950">Crear Nuevo Producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] ">
        <DialogHeader>
          <DialogTitle>Crear nuevo producto</DialogTitle>
          <DialogDescription>
          Agrega nuevos productos al inventario. Completa todos los campos requeridos y haz clic en Guardar cuando hayas terminado.
          </DialogDescription>
        </DialogHeader>
        <FormularioProducto/>
        <DialogFooter>
          <Button type="submit">Guardar Producto</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
