import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, Mail, Mailbox, PhoneCall } from "lucide-react";
import { ActiveIndicator } from "@/components/active-indicator";
import MinimalClock from "@/components/minimal-clock";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's bring your design vision to life",
};

export default function Page() {
  return (
    <>
      <section className="space-y-4 rounded-xl border-foreground/10 bg-background/50 p-4 backdrop-blur transition ease-linear hover:border-foreground/60 hover:bg-background/75 supports-[backdrop-filter]:bg-background/50">
        <h1 className="font-display text-4xl leading-none">
          Let&apos;s bring your design vision to life
        </h1>
        <p>
          Discuss your design needs whether you&apos;re looking to refresh your
          brand identity, create a captivating website, or develop eye-catching
          print materials, our team is ready to collaborate and bring your ideas
          to life.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="https://cal.com/haroldv"
            target="_blank"
            className="flex w-full items-center justify-between gap-4 rounded-xl border border-foreground p-4 transition-colors ease-linear hover:bg-gradient-to-br hover:from-foreground hover:to-zinc-700 hover:text-background"
          >
            <ActiveIndicator />
            Start a Project <ArrowUpRight />
          </Link>
          <Link
            href="mailto:haroldvarde@gmail.com"
            className="flex w-full items-center justify-between gap-4 rounded-xl border border-foreground p-4 transition-colors ease-linear hover:bg-gradient-to-br hover:from-foreground hover:to-zinc-700 hover:text-background"
          >
            <div className="flex flex-col">
              <span>Email us</span>
              <small className="text-muted-foreground">
                haroldvarde@gmail.com
              </small>
            </div>
            <Mailbox />
          </Link>
          <Link
            href="tel:+639816040613"
            className="flex w-full items-center justify-between gap-4 rounded-xl border border-foreground p-4 transition-colors ease-linear hover:bg-gradient-to-br hover:from-foreground hover:to-zinc-700 hover:text-background"
          >
            <div className="flex flex-col">
              <span>Call us</span>
              <small className="text-muted-foreground">
                (+63) 981 604 0613
              </small>
            </div>
            <PhoneCall />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-2">
            <svg
              className="mt-2 size-8 sm:mt-1"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                style={{
                  mixBlendMode: "luminosity",
                }}
              >
                <path
                  d="M12 19.7934C12 16.0221 12 14.1365 13.1716 12.965C14.3431 11.7934 16.2288 11.7934 20 11.7934H38.3477C42.119 11.7934 44.0046 11.7934 45.1761 12.965C46.3477 14.1365 46.3477 16.0221 46.3477 19.7934V38.1411C46.3477 41.9123 46.3477 43.798 45.1761 44.9695C44.0046 46.1411 42.119 46.1411 38.3477 46.1411H20C16.2288 46.1411 14.3431 46.1411 13.1716 44.9695C12 43.798 12 41.9123 12 38.1411V19.7934Z"
                  fill="url(#paint0_linear_3536_539)"
                />
                <path
                  d="M84.6883 34.8115C86.9003 39.8683 88.0063 42.3967 86.8222 44.2072C85.638 46.0177 82.8783 46.0177 77.3589 46.0177L66.577 46.0177C61.0213 46.0177 58.2434 46.0177 57.0606 44.1958C55.8778 42.3738 57.0084 39.8365 59.2696 34.7617L64.7102 22.5514C67.8757 15.447 69.4584 11.8948 72.0649 11.9037C74.6714 11.9126 76.2299 15.4754 79.347 22.6012L84.6883 34.8115Z"
                  fill="url(#paint1_linear_3536_539)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8164 54.0494C13.7087 54.0494 12 55.7581 12 57.8659V71.2233H37.7608C42.5032 71.2233 46.3477 67.3788 46.3477 62.6364C46.3477 57.8939 42.5032 54.0494 37.7608 54.0494H15.8164ZM29.1739 71.2235H12V80.3974C12 84.1686 12 86.0542 13.1716 87.2258C14.3431 88.3974 16.2288 88.3974 20 88.3974H44.871C45.6866 88.3974 46.3477 87.7362 46.3477 86.9207C46.3477 86.4949 46.1639 86.0898 45.8434 85.8094L29.1739 71.2235Z"
                  fill="url(#paint2_linear_3536_539)"
                />
                <path
                  d="M59.4896 65.2303C57.2749 60.1725 56.1676 57.6437 57.3517 55.8325C58.5358 54.0214 61.2965 54.0214 66.8178 54.0214H77.59C83.1477 54.0214 85.9265 54.0214 87.1092 55.844C88.2919 57.6665 87.16 60.2044 84.8962 65.2801L79.4605 77.4674C76.2951 84.5646 74.7124 88.1132 72.107 88.1043C69.5015 88.0954 67.943 84.5361 64.826 77.4176L59.4896 65.2303Z"
                  fill="url(#paint3_linear_3536_539)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3536_539"
                  x1={12}
                  y1={45.9996}
                  x2={46.3999}
                  y2={11.5996}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset={1} stopColor="#09090B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3536_539"
                  x1={54.3998}
                  y1={45.9997}
                  x2={89.5997}
                  y2={5.99981}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset={1} stopColor="#09090B" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3536_539"
                  x1={12}
                  y1={88}
                  x2={46.3999}
                  y2={54.8001}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset={1} stopColor="#09090B" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3536_539"
                  x1={54.4003}
                  y1={93.9995}
                  x2={89.6002}
                  y2={53.9996}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset={1} stopColor="#09090B" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display text-4xl leading-none">
              HARV CREATIVE
            </span>
          </div>

          <div className="space-x-2 text-sm">
            <Link
              href="https://twitter.com/haroldvarde"
              target="_blank"
              className="border-b border-muted-foreground transition-colors hover:text-foreground/60"
              title="https://twitter.com/haroldvarde"
            >
              Twitter
            </Link>
            <Link
              href="https://layers.to/harv"
              target="_blank"
              className="border-b border-muted-foreground transition-colors hover:text-foreground/60"
              title="https://layers.to/harv"
            >
              Layers
            </Link>
          </div>

          <div className="inline-flex gap-1 text-sm">
            <span>Manila / Bicol, Philippines ·</span> <MinimalClock />
          </div>

          <small>
            &copy; 2024 · Crafting things for the web with love and kindness.
          </small>
        </div>
      </section>
    </>
  );
}
