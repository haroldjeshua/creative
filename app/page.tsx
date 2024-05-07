import {
  BadgeApps,
  BadgeFrontend,
  BadgeIcons,
  BadgeInterface,
  BadgeSoftware,
  BadgeWebsites,
} from "@/components/decors";
import Draggable from "@/components/draggable";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center">
      <Draggable id="badge-websites" rotation={2.94} className="left-2 top-24">
        <BadgeWebsites />
      </Draggable>
      <Draggable id="badge-icons" rotation={9.96} className="right-8 top-12">
        <BadgeIcons />
      </Draggable>
      <Draggable
        id="badge-frontend"
        rotation={-9.21}
        className="right-8 top-36 sm:right-12"
      >
        <BadgeFrontend />
      </Draggable>
      <Draggable
        id="badge-apps"
        rotation={7.87}
        className="left-12 top-44 sm:left-48"
      >
        <BadgeApps />
      </Draggable>
      <Draggable
        id="badge-software"
        rotation={0}
        className="right-4 top-44 sm:right-64"
      >
        <BadgeSoftware />
      </Draggable>
      <Draggable
        id="badge-interface"
        rotation={-6.33}
        className="left-4 top-32 sm:left-80"
      >
        <BadgeInterface />
      </Draggable>

      {/* <BadgeWebsites className="absolute left-2 top-24 rotate-[2.94deg]" /> */}
      {/* <BadgeIcons className="absolute right-8 top-12 rotate-[9.96deg]" /> */}
      {/* <BadgeFrontend className="absolute right-8 top/-36 rotate-[-9.21deg] sm:right-12" /> */}
      {/* <BadgeApps className="absolute left-12 top-44 rotate-[7.87deg] sm:left-48" /> */}
      {/* <BadgeSoftware className="absolute right-4 top-44 sm:right-64" /> */}
      {/* <BadgeInterface className="absolute left-4 top-32 rotate-[-6.33deg] sm:left-80" /> */}

      <svg
        className="z-10 w-16"
        viewBox="0 0 77 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8438 39.5H15.3438V39V24.6562H30.3438V39V39.5H30.8438H35.4219H35.9219V39V7V6.5H35.4219H30.8438H30.3438V7V19.0781H15.3438V7V6.5H14.8438H10.2812H9.78125V7V39V39.5H10.2812H14.8438Z"
          stroke="currentColor"
        />
        <path
          d="M69.8438 39H56.125V36.7188H53.8438V34.4375H51.5625V32.1562H49.2812V13.8594H51.5625V11.5781H53.8438V9.29688H56.125V7H69.8438V9.29688H72.125V11.5781H74.4219V13.8594H76.7031V18.4375H72.125V16.1562H69.8438V13.8594H67.5625V11.5781H58.4219V13.8594H56.125V16.1562H53.8438V29.8594H56.125V32.1562H58.4219V34.4375H67.5625V32.1562H69.8438V29.8594H72.125V27.5781H76.7031V32.1562H74.4219V34.4375H72.125V36.7188H69.8438V39Z"
          fill="currentColor"
        />
        <rect x={1.5} y={1.5} width={43} height={43} stroke="currentColor" />
        <rect
          x={0.75}
          y={0.75}
          width={2.5}
          height={2.5}
          fill="white"
          stroke="currentColor"
          strokeWidth={0.5}
        />
        <rect
          x={42.75}
          y={0.75}
          width={2.5}
          height={2.5}
          fill="white"
          stroke="currentColor"
          strokeWidth={0.5}
        />
        <rect
          x={42.75}
          y={42.75}
          width={2.5}
          height={2.5}
          fill="white"
          stroke="currentColor"
          strokeWidth={0.5}
        />
        <rect
          x={0.75}
          y={42.75}
          width={2.5}
          height={2.5}
          fill="white"
          stroke="currentColor"
          strokeWidth={0.5}
        />
      </svg>
      <h1 className="z-10 font-display text-6xl sm:text-7xl md:text-9xl">
        {siteConfig.title.toLocaleUpperCase()}
      </h1>
      <h3 className="z-10 text-lg sm:text-xl">{siteConfig.subtitle}</h3>
    </section>
  );
}
