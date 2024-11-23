"use client";
import { Home, LogOut, Phone, User } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  const menuItems = [
    {
      title: "Menu",
      items: [
        {
          icon: <Home />,
          title: "Inicio",
          href: "/dashboard",
        },
        {
          icon: <User />,
          title: "Usuario",
          href: "/dashboard/usuario",
        },
        {
          icon: <Phone />,
          title: "Contacto",
          href: "/dashboard/contacto",
        },
      ],
    },
  ];
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <span className="hidden xl:block text-gray-600 font-light my-4">
            {item.title}
          </span>
          {item.items.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-800 py-2"
              >
                <div className="">{item.icon}</div>
                <span className="hidden xl:block">{item.title}</span>
              </Link>
            </div>
          ))}

        </div>
      ))}
    </div>
  );
};

export default Menu;
