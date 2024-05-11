"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
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
  const constraintsRef = useRef(null);

  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center"
      ref={constraintsRef}
    >
      <Draggable
        id="badge-websites"
        rotation={2.94}
        className="left-2 top-24"
        constraintsRef={constraintsRef}
      >
        <BadgeWebsites />
      </Draggable>
      <Draggable
        id="badge-icons"
        rotation={9.96}
        className="right-8 top-12"
        constraintsRef={constraintsRef}
      >
        <BadgeIcons />
      </Draggable>
      <Draggable
        id="badge-frontend"
        rotation={-9.21}
        className="right-8 top-36 sm:right-12"
        constraintsRef={constraintsRef}
      >
        <BadgeFrontend />
      </Draggable>
      <Draggable
        id="badge-apps"
        rotation={7.87}
        className="left-12 top-44 sm:left-48"
        constraintsRef={constraintsRef}
      >
        <BadgeApps />
      </Draggable>
      <Draggable
        id="badge-software"
        rotation={0}
        className="right-4 top-44 sm:right-64"
        constraintsRef={constraintsRef}
      >
        <BadgeSoftware />
      </Draggable>
      <Draggable
        id="badge-interface"
        rotation={-6.33}
        className="left-4 top-32 sm:left-80"
        constraintsRef={constraintsRef}
      >
        <BadgeInterface />
      </Draggable>

      <h1 className="z-10 font-display text-6xl sm:text-7xl md:text-9xl">
        {siteConfig.title.toLocaleUpperCase()}
      </h1>
      <h3 className="z-10 text-lg sm:text-xl">{siteConfig.subtitle}</h3>
    </motion.section>
  );
}
