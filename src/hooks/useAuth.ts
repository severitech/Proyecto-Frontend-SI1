"use client";  // Asegura que este componente sea ejecutado en el cliente

import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    alert(token)
    if (!token) {
      router.push("/login");
      return;
    }
  }
  //   try {
  //     const decodedToken: any = jwtDecode(token);
  //     const role = decodedToken.role;

  //     if (role === "user" || role === "admin") {
  //       router.push("/dashboard");
  //     } else {
  //       router.push("/login");
  //     }
  //   } catch (error) {
  //     console.error("Error al decodificar el token:", error);
  //     router.push("/login");
  //   }
  // }, [router]);

  )
}
