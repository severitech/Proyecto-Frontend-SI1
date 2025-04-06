import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

export const datos ={
    user: {
      name: "shadcn",
      avatar: "/avatars/shadcn.jpg",
    },
    //mostrar datos en la navegacion de administrador
    navMain: [
      {
        title: "Productos",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Productos",
            url: "/dashboard/productos",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    //filas que se va a mostrar en las ventas y a donde se va a dirigir
    ventas: [
      {
        name: "Ventas",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }