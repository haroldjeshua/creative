"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  BadgeApps,
  BadgeBranding,
  BadgeConsulting,
  BadgeDesignSystem,
  BadgeFrontend,
  BadgeIcons,
  BadgeInterface,
  BadgeLandingPages,
  BadgeSoftware,
  BadgeVisualIdentity,
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
      <Draggable
        id="badge-branding"
        rotation={3.14}
        className="bottom-32 left-2 sm:left-12"
        constraintsRef={constraintsRef}
      >
        <BadgeBranding />
      </Draggable>
      <Draggable
        id="badge-ds"
        rotation={12.34}
        className="bottom-44 left-24 sm:left-44"
        constraintsRef={constraintsRef}
      >
        <BadgeDesignSystem />
      </Draggable>
      <Draggable
        id="badge-lp"
        rotation={-4.2}
        className="bottom-56 left-16 sm:bottom-44 sm:left-[45%]"
        constraintsRef={constraintsRef}
      >
        <BadgeLandingPages />
      </Draggable>
      <Draggable
        id="badge-vi"
        rotation={-6.9}
        className="bottom-32 right-32"
        constraintsRef={constraintsRef}
      >
        <BadgeVisualIdentity />
      </Draggable>
      <Draggable
        id="badge-consulting"
        rotation={-1.6}
        className="bottom-24 right-6 sm:bottom-16 sm:right-16"
        constraintsRef={constraintsRef}
      >
        <BadgeConsulting />
      </Draggable>

      <h1 className="z-10 font-display text-6xl sm:text-7xl md:text-9xl">
        {siteConfig.title.toLocaleUpperCase()}
      </h1>
      <h3 className="z-10 text-lg sm:text-xl">{siteConfig.subtitle}</h3>
    </motion.section>
  );
}
