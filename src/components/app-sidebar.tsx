"use client"

import * as React from "react"


import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { datos } from "@/lib/datosComponentes"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
       Inicio
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={datos.navMain} />
        <NavProjects projects={datos.ventas} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={datos.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
