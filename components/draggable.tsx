"use client";

import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DraggableProps {
  id: string;
  rotation: number;
  className: string;
  constraintsRef: RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

export default function Draggable({
  id,
  rotation,
  className,
  constraintsRef,
  children,
}: DraggableProps) {
  return (
    <motion.div
      key={id}
      drag
      dragConstraints={constraintsRef}
      initial={{ rotate: rotation }}
      className={cn("absolute", className)}
    >
      {children}
    </motion.div>
  );
}
