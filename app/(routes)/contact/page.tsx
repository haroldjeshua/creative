import { Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's bring your design vision to life",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <Mail
        className="size-24 -rotate-6 sm:size-32 xl:fixed xl:left-4 xl:top-1/3 xl:size-44"
        strokeWidth={1}
      />
      <h1 className="font-display text-6xl">Get in Touch</h1>
      <h3>Let&apos;s bring your design vision to life</h3>
      <p>
        We&apos;re excited to discuss your design needs and explore how our
        expertise can elevate your brand. Whether you&apos;re looking to refresh
        your brand identity, create a captivating website, or develop
        eye-catching print materials, our team is ready to collaborate and bring
        your ideas to life.
      </p>
    </section>
  );
}
