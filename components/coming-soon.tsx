"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ComingSoon() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Coming Soon</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Coming soon</DialogTitle>
          <DialogDescription>
            We understand your anticipation might be reaching dizzying heights, but fear not! This delay is intentional, as we&apos;re carefully sanding down every rough edge and polishing each element to perfection. After all, true art takes time, and we wouldn&apos;t want to rush the creative process - that&apos;s just not our style.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
						<p>test</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Okay, that&apos;s cool
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}