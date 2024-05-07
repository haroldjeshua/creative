"use client";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  InfoIcon,
  MailIcon,
  PackageOpenIcon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType, ReactNode } from "react";

export interface RouteItem {
  name: string;
  href: string;
  icon: ComponentType;
}

export const routes: RouteItem[] = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Services", href: "/services", icon: PackageOpenIcon },
  { name: "Clients", href: "/clients", icon: UsersRoundIcon },
  { name: "Info", href: "/info", icon: InfoIcon },
  { name: "Contact", href: "/contact", icon: MailIcon },
];

export function Navbar() {
  const pathname = usePathname();

  const isTabActive = (tabHref: string) => {
    if (tabHref === "/") {
      return pathname === "/";
    }

    return pathname.includes(tabHref) || pathname.startsWith(`/${tabHref}/`);
  };

  return (
    <div className="fixed bottom-0 flex w-full  items-center justify-center pb-4">
      <nav className="mx-auto flex max-w-screen-md gap-1 sm:gap-2">
        {routes.map((route: RouteItem) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "relative flex min-w-16 flex-col gap-4 rounded-lg bg-background p-2 transition-all ease-linear sm:min-w-24 sm:gap-8 sm:p-3",
              isTabActive(route.href)
                ? "bg-foreground text-background hover:bg-foreground/85"
                : "bg-background hover:bg-background/25",
            )}
          >
            <span>
              <route.icon />
            </span>
            <span className="text-xs sm:text-sm md:text-base">
              {route.name}
            </span>
            {isTabActive(route.href) && (
              <span
                className={cn(
                  "absolute bottom-[5px] h-[2px] w-2 rounded-sm bg-background sm:bottom-2 sm:h-1 sm:w-4",
                )}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
