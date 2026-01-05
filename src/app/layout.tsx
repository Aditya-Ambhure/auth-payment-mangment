import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fullstack E-Commerce Platform",
  description: "Auth, Products, Payments, and Orders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
