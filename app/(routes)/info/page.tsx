import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="font-display text-6xl">About Us</h1>
      <h3>The story behind our independent design studio</h3>
      <p>
        Harv Creative was founded in 2024 by{" "}
        <Link
          href="https://harvio.vercel.app"
          target="_blank"
          className="border-b border-muted-foreground transition-colors hover:text-foreground/60"
        >
          Harold Varde
        </Link>
        , a seasoned software creative with a lifelong passion for art and
        design. What started as a small, home-based studio has grown into a
        renowned independent practice, known for its innovative approach and
        exceptional craftsmanship. Our team of talented designers brings
        together diverse backgrounds and perspectives, allowing us to tackle
        projects from multiple angles and deliver truly unique solutions.
      </p>
    </section>
  );
}
