"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface DraggableProps {
  id: string;
  rotation: number;
  className: string;
  children: React.ReactNode;
}

export default function Draggable({
  id,
  rotation,
  className,
  children,
}: DraggableProps) {
  return (
    <motion.div
      key={id}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      initial={{ rotate: rotation }}
      className={cn("absolute", className)}
    >
      {children}
    </motion.div>
  );
}
