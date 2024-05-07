import { PackageOpen } from "lucide-react";

export default function Page() {
  return (
    <section className="space-y-4">
      <PackageOpen
        className="size-24 -rotate-12 sm:size-32 xl:fixed xl:left-4 xl:top-1/3 xl:size-44"
        strokeWidth={1}
      />
      <h1 className="font-display text-6xl">Services</h1>
      <h3>Comprehensive services to elevate your brand and business</h3>
      <p>
        Our diverse range of design services caters to all your brand&apos;s
        needs. From crafting compelling brand identities to developing
        user-friendly websites and creating captivating print materials, we have
        the expertise to bring your vision to life. Explore our offerings and
        discover how we can help your business stand out in a crowded market.
      </p>
    </section>
  );
}
