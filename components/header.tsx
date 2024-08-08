import { CalendarFold, Mail, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <>
      <Link
        href="/"
        className="fixed left-4 top-4 z-10 text-background text-opacity-100 mix-blend-difference"
      >
        <svg
          className="w-12"
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
      </Link>
      <div className="fixed right-4 top-4 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size={"sm"}
              className="gap-2 rounded-full bg-gradient-to-br from-primary to-zinc-700 px-4 hover:bg-gradient-to-br hover:from-primary/90 hover:to-primary/60"
            >
              {/* <Link href="https://cal.com/haroldv" target="_blank">
                Book a call <CalendarFold className="ml-2 size-4" />
              </Link> */}
              <span>Get in touch</span>
              <Send className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gradient-to-br from-primary to-zinc-700 text-background">
            <DropdownMenuItem>
              <Link
                href="mailto:haroldvarde@gmail.com"
                target="_blank"
                className="flex w-full items-center gap-2"
              >
                <span>Email us</span>
                <Mail className="ml-auto size-4" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="https://cal.com/haroldv"
                target="_blank"
                className="flex w-full items-center gap-2"
              >
                <span>Book a call</span>
                <CalendarFold className="ml-auto size-4" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
