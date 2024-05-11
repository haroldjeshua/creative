import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Info",
  description: "The story behind our independent design studio",
};

export default function Page() {
  return (
    <>
      <section className="space-y-4">
        <p>Hey, Harold here.</p>

        <p>
          I&apos;m the one behind{" "}
          <span className="font-display text-2xl uppercase">Harv Creative</span>
          .
        </p>

        <p>
          From the name itself, we are making <em>creative</em> things for the
          web, could it be websites, web apps, user interfaces, product design
          and anything pixel-related, to push more creative boundaries within
          the industry.
        </p>

        <p>
          I started building websites 5+ years ago and with the experience I
          gained through that time, it has been my lifelong dream to start a
          small side gig to help organizations and business to elevate brands
          and products for the community.
        </p>

        <p>
          I&apos;ve been working between digital design and software engineering
          to carefully curate things between different disciplines that way we
          can craft exceptional projects that exceed people&apos;s expectations.
        </p>

        <p>
          One of our goal is to bring high-quality products that stand out among
          others. We want to raise the standards of digital work in my country
          as we believe software should be beautiful, accessible, and helpful to
          the community.
        </p>

        <p>
          We design and build with thought, attention to details and care for
          the business. Every projects and products that we launch is made
          specially for you by a senior-level creative.
        </p>

        <p>
          If you&apos;re looking for someone to collaborate and take your
          projects to the next level, someone you can create a culture of craft
          with and build a long-lasting relationship with, you&apos;re in the
          right place.
        </p>

        <p>Cheers,</p>

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
      </section>
      <section className="mt-32 flex h-64 w-full flex-col items-center justify-center gap-8 rounded-xl">
        <h1 className="font-display text-xl sm:text-8xl">
          Ready to start a project?
        </h1>

        <Button asChild size={"lg"} className="rounded-full">
          <Link href="https://cal.com/haroldv" target="_blank">
            Say Hello <ArrowUpRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
