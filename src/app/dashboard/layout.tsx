// "use client" porque estamos usando hooks de cliente
"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

// Layout principal de Dashboard
export default function DashboardLayout({ children }: { children: ReactNode }) {
  //useAuth(); // Para el hook de autenticación
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Aquí se renderiza el contenido de las páginas hijas */}
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
