import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center gap-4">
      <h1 className="font-display text-9xl">404</h1>
      <p>Page Not Found</p>
      <Button asChild variant="secondary">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  );
}
