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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function CrearCategoria() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-blue-800 hover:bg-blue-950">
            Crear nueva Categoria
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] ">
          <DialogHeader>
            <DialogTitle>Crear nueva Categoria</DialogTitle>
            <DialogDescription>
              Agrega nuevos productos al inventario. Completa todos los campos
              requeridos y haz clic en Guardar cuando hayas terminado.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 grid-cols-1 py-4">
            <div className="flex flex-col  gap-1">
              <Label htmlFor="codigo" className="text-up">
                Código:
              </Label>
              <Input id="codigo" className="col-span-3" />
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
              <Label htmlFor="Categoria" className="text-right">
                Categoria:
              </Label>
              {/*<ComboboxDemo></ComboboxDemo>*/}
            </div>
            <div className="flex flex-col  gap-1">
              <Label htmlFor="Producto" className="text-right">
                Producto:
              </Label>
              <Input id="Producto" placeholder="" className="col-span-3" />
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
          </form>
          <DialogFooter>
            <Button type="submit">Guardar Producto</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
