"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrentTimeProps {
  className?: string;
}

export default function MinimalClock({ className }: CurrentTimeProps) {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const handleTime = () => {
      const newTime = formatTime(new Date());
      setCurrentTime(newTime);
    };

    const interval = setInterval(handleTime, 1000);
    handleTime();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  return <div className={cn("tabular-nums", className)}>{currentTime}</div>;
}
