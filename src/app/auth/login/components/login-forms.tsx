"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideFacebook } from "lucide-react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  console.log(usuario, password);

  return (
    <div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Iniciar sesion</h1>
        <p className="text-balance text-lg text-muted-foreground">
          Ingresa el usuario de tu cuenta
        </p>
      </div>

      <div className="grid gap-6">
        <form className={cn("flex flex-col gap-6", className)} {...props}>
          <div className="grid gap-2">
            <Label htmlFor="usuario">Usuario</Label>
            <Input
              id="usuario"
              type="text"
              placeholder="Michael123"
              onChange={(e) => setUsuario(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === " ") {
                  e.preventDefault(); // Prevenir que el espacio sea escrito
                }
              }}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === " ") {
                  e.preventDefault(); // Prevenir que el espacio sea escrito
                }
              }}
              placeholder="Contraseña"
            />
          </div>
          <Button type="submit" className="w-full">
            Ingresar
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              O también puedes
            </span>
          </div>
        </form>
        <Button variant="outline" className="w-full bg-[#3b5998] text-white  ">
          <LucideFacebook />
          Ingresar con Facebook
        </Button>
      </div>
    </div>
  );
}
