import { Inter } from "next/font/google";
import "./globals.css";
import Icon from "../public/icon.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mateo Shkodra",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
