import { Metadata } from "next";
import {
  ArrowUpRight,
  ContactIcon,
  GlobeIcon,
  PackageOpen,
  PanelsTopLeftIcon,
  SwatchBookIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ActiveIndicator } from "@/components/active-indicator";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive services to elevate your brand and business",
};

type StringArray = Array<string> & {
  map<U>(
    callbackfn: (value: string, index: number, array: string[]) => U,
    thisArg?: any,
  ): U[];
};

interface MainServiceProps {
  title: string;
  list: string[];
  icon: React.ReactNode;
}

const mainServices: MainServiceProps[] = [
  {
    title: "Brand Design",
    list: [
      "Brand guide",
      "Creative direction",
      "Strategy and storytelling",
      "Marketing pitch decks",
    ],
    icon: <SwatchBookIcon className="size-8 sm:size-16" />,
  },
  {
    title: "Product Design",
    list: [
      "Websites",
      "Web apps",
      "Mobile apps",
      "Wireframes",
      "Prototypes",
      "Design systems",
    ],
    icon: <PanelsTopLeftIcon className="size-8 sm:size-16" />,
  },
  {
    title: "Web Development",
    list: ["Full-stack", "Low-code", "No-code"],
    icon: <GlobeIcon className="size-8 sm:size-16" />,
  },
  {
    title: "Consultancy",
    list: ["QA Processing", "Advisoring"],
    icon: <ContactIcon className="size-8 sm:size-16" />,
  },
];

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-screen-xs space-y-4 text-center">
        <PackageOpen className="hidden size-12 -rotate-12 sm:size-24 md:fixed md:left-4 md:top-1/3 md:block md:size-44" />
        <h1 className="font-display text-4xl">What we do</h1>
        <h2 className="text-balance">
          We offer full services from design to development, to help you with
          everything you need to take your business from 0 -&gt; 1
        </h2>
      </section>
      <section className="mt-8 grid w-full grid-cols-2 gap-4">
        {mainServices.map((mainService: MainServiceProps) => (
          <div
            key={mainService.title}
            className="group flex flex-col justify-start gap-4 rounded-xl border-foreground/10 bg-background/50 p-4 backdrop-blur transition ease-linear hover:border-foreground/60 hover:bg-background/75 supports-[backdrop-filter]:bg-background/50 sm:flex-row"
          >
            <span>{mainService.icon}</span>
            <div>
              <h3 className="font-medium leading-none">{mainService.title}</h3>
              <ul className="mt-2 list-inside">
                {mainService.list.map((service) => (
                  <li key={service} className="text-xs sm:text-sm">
                    — {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-8 max-w-screen-xs text-center">
        <Button asChild size={"lg"} className="space-x-2 rounded-full">
          <Link href="https://cal.com/haroldv" target="_blank">
            <ActiveIndicator />
            <span>Start a project</span>
            <ArrowUpRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
