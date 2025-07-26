import type { Metadata } from "next";
import "./globals.css";
import Header from './header'

export const metadata: Metadata = {
  title: "mshkodra",
  description: "mshkodra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="max-w-2xl mx-auto px-6 py-16 min-h-screen text-left p-8">
        <Header />
        <br/>
        <body>
          {children}
        </body>
      </div>
    </html>
  );
}
