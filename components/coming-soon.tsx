"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";

export function ComingSoon() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Coming Soon</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Coming very soon!</DialogTitle>
            <DialogDescription>
              We are cooking something very special.
            </DialogDescription>
          </DialogHeader>
          <ComingSoonMessage />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Okay, that&apos;s cool
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Coming Soon</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Coming very soon!</DrawerTitle>
          <DrawerDescription>
            We are cooking something very special.
          </DrawerDescription>
        </DrawerHeader>
        <ComingSoonMessage className="px-4" />
        <DrawerFooter className="sm:justify-start">
          <DrawerClose asChild>
            <Button type="button" variant="secondary">
              Okay, that&apos;s cool
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ComingSoonMessage({ className }: React.ComponentProps<"div">) {
  return (
    <div className="flex items-center px-4 md:px-0">
      <div className="grid flex-1 gap-2">
        <p>
          We&apos;re putting the finishing touches around this part. Stay tuned
          - this section will be finished in no time.
        </p>
      </div>
    </div>
  );
}
