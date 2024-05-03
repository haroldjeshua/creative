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
          <DialogTitle>Coming very soon!</DialogTitle>
          <DialogDescription>
            We understand your anticipation might be reaching dizzying heights, but fear not! This delay is intentional, as we&apos;re carefully sanding down every rough edge and polishing each element to perfection. After all, true art takes time, and we wouldn&apos;t want to rush the creative process - that&apos;s just not our style.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
						<svg
          width={274 / 2}
          height={169 / 2}
          viewBox="0 0 274 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.864 41.262c12.38 39.547 17.254 81.474 25.076 122.036M38.97 41.262c11.482 38.886 21.736 77.781 31.764 117.021M2.192 98.1c36.554-.988 71.307-11.314 106.991-18.39M94.138 163.301c7.777-44.007 14.049-87.839 20.06-132.067M109.184 19.531c18.818 48.9 37.784 97.708 55.167 147.113M97.481 84.73c19.902-3.11 38.99-7.163 58.511-11.703M162.679 9.5c5.969 42.947 10.785 85.649 15.045 128.723"
            stroke="currentColor"
            strokeWidth={4}
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" from="0" to="4" dur="2.5s" />
          </path>
          <path
            d="M147.633 27.887c23.078-3.262 41.893-2.645 55.91 18.761 7.205 11.002 1.289 15.566-8.73 18.668-21.2 6.561 21.094 59.585 28.048 69.562M191.098 21.202c18.802 23.964 33.739 51.34 49.594 77.27 5.075 8.299 9.685 16.9 15.232 24.891.446.643 1.402 1.29 1.671 0 4.442-21.257 4.484-44.415 7.059-65.94 2.178-18.205 4.481-36.416 6.687-54.61"
            stroke="currentColor"
            strokeWidth={4}
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" from="0" to="4" dur="4s" />
          </path>
        </svg>
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