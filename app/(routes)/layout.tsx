import React from "react";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-start justify-center pb-36 pt-16">
      {children}
    </div>
  );
}
