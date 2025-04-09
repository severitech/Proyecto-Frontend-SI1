 "use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { Categoria } from "./columns";
import { toast } from "sonner";

// Esta función obtiene los datos desde el backend
async function getData(): Promise<Categoria[]> {
  const response = await fetch("http://localhost:5000/api/categorias");
  if (!response.ok) {
    toast.error("Error al cargar los datos");
    return []; // Retornamos un arreglo vacío en caso de error
  }
  const data: Categoria[] = await response.json();
  return data;
}

export function ComboboxDemo({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [categorias, setCategorias] = React.useState<Categoria[]>([]);

  React.useEffect(() => {
    // Llamamos a getData y actualizamos el estado con los datos obtenidos
    const fetchCategorias = async () => {
      const data = await getData();
      setCategorias(data);
    };
    fetchCategorias();
  }, []); // El efecto solo se ejecutará una vez después del primer renderizado

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value || "Seleccionar Categoria..."}

          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar Categoria" />
          <CommandList>
            <CommandEmpty>Sin resultados.</CommandEmpty>
            <CommandGroup>
              {categorias.map((categoria) => (
                <CommandItem
                  key={categoria.categoria}
                  value={categoria.categoria}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {categoria.categoria}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === categoria.categoria ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
