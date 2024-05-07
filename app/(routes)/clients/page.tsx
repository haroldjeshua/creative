import { Metadata } from "next";
import { UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients",
  description: "Trusted by leading brands and businesses",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <UsersRound
        className="size-24 rotate-3 sm:size-32 xl:fixed xl:left-4 xl:top-1/3 xl:size-44"
        strokeWidth={1}
      />
      <h1 className="font-display text-6xl">Clients</h1>
      <h3>Trusted by leading brands and businesses</h3>
      <p>
        At Harv Creative, we take pride in the lasting partnerships we&apos;ve
        forged with our clients. Our collaborative approach and unwavering
        commitment to excellence have earned us the trust of leading brands and
        businesses across various industries. We&apos;re honored to have worked
        with these esteemed organizations and look forward to continuing to
        deliver exceptional design solutions.
      </p>
    </section>
  );
}
