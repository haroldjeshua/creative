import { Twitter } from "lucide-react";
import Link from "next/link";

export function Header() {
	return (
		<>
			<Link href="/" className="absolute top-4 left-4 z-10">
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
			<Link href="twitter.com/haroldvarde" target="_blank" className="absolute top-4 right-4 z-10 flex gap-1 hover:text-foreground/75 transition-colors ease-linear">
				<span>follow us on</span> <Twitter strokeWidth={1.5} />
			</Link>
		</>
	)
}