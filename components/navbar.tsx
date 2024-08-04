"use client";

import { cn } from "@/lib/utils";
import {
  BadgeDollarSignIcon,
  BriefcaseBusinessIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  PackageOpenIcon,
  ScrollTextIcon,
  UsersRoundIcon,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ComponentType, ReactNode } from "react";

export interface RouteItem {
  name: string;
  href: string;
  isActive?: boolean;
  icon: ComponentType;
}

export const routes: RouteItem[] = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Services", href: "/services", icon: PackageOpenIcon },
  // { name: "Work", href: "/work", icon: BriefcaseBusinessIcon, isActive: false },
  // { name: "Clients", href: "/clients", icon: UsersRoundIcon, isActive: false },
  // { name: "Pricing", href: "/pricing", icon: BadgeDollarSignIcon, isActive: false },
  { name: "Info", href: "/info", icon: InfoIcon },
  { name: "Story", href: "/story", icon: ScrollTextIcon },
  { name: "Contact", href: "/contact", icon: MailIcon },
];

export function Navbar() {
  const navWidth = "400px";
  const pathname = usePathname();

  const isTabActive = (tabHref: string) => {
    if (tabHref === "/") {
      return pathname === "/";
    }

    return pathname.includes(tabHref) || pathname.startsWith(`/${tabHref}/`);
  };

  return (
    <div
      className="fixed bottom-0 flex items-center justify-center pb-4"
      style={{ width: navWidth, left: "calc(50% - " + navWidth + "/2)" }}
    >
      <nav className="mx-auto flex max-w-screen-xs gap-1 sm:gap-2">
        {routes.map((route: RouteItem) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "relative flex min-w-16 flex-col gap-4 rounded-lg bg-background p-2 transition-all ease-linear",
              isTabActive(route.href)
                ? "z-10 -translate-y-3 -rotate-6 bg-foreground text-background shadow-lg shadow-foreground backdrop-blur hover:bg-foreground/95 supports-[backdrop-filter]:bg-foreground/95"
                : "border border-foreground/25 bg-background shadow-sm hover:-translate-y-1 hover:bg-background/85",
            )}
          >
            <span>
              <route.icon />
            </span>
            <span className="text-xs sm:text-sm">{route.name}</span>
            {isTabActive(route.href) && (
              <span
                className={cn(
                  "absolute bottom-[5px] h-[2px] w-2 rounded-sm bg-background",
                )}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
