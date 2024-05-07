import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  Home,
  HomeIcon,
  InfoIcon,
  MailIcon,
  PackageOpenIcon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";
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
  return (
    <div className="fixed bottom-0 flex w-full  items-center justify-center pb-4">
      <nav className="mx-auto flex max-w-screen-md gap-2">
        {routes.map((route: RouteItem) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "flex flex-col gap-4 rounded-lg bg-background p-2 transition-colors ease-linear hover:bg-background/50 sm:min-w-24 sm:gap-8 sm:p-3",
            )}
          >
            <span>
              <route.icon />
            </span>
            <span>{route.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
