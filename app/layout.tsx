import type { Metadata } from "next";
import { Lato, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const heading = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const body = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShailaCon 2026",
  description: "The website fro ShailaCon 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <header className="container mx-auto flex justify-center mx-auto py-4 h-(--header-height)">
          <nav className="w-full bg-white flex items-center justify-evenly">
            <ul className="flex justify-evenly w-full">
              <li className="flex items-center">
                <Link href="#info" className="uppercase">
                  Info
                </Link>
              </li>
              <li>
                <Image
                  src="/logo.svg"
                  className=""
                  alt="Logo"
                  width={124}
                  height={72}
                />
              </li>
              <li className="flex items-center">
                <Link
                  href="https://www.teepublic.com/t-shirt/83135704-shailacon-2026"
                  className="uppercase"
                >
                  Apparel
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
