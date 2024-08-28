import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Mehrotra | Space Portfolio  ",
  description:
    "This is my portfolio built in nextjs with typescript and used three.js for 3d elements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        {/* Basic Metadata */}
        <title>Ayush Mehrotra - Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Ayush Mehrotra, showcasing expertise in MERN stack, Next.js, Tailwind CSS, TypeScript, and Three.js."
        />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Ayush Mehrotra - Portfolio" />
        <meta
          property="og:description"
          content="Discover the projects and achievements of Ayush Mehrotra, a skilled developer in MERN stack, Next.js, and more."
        />
        <meta
          property="og:image"
          content="https://ayush-mehrotra-portfolio.vercel.app/favicon.png"
        />
        <meta
          property="og:url"
          content="https://ayush-mehrotra-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Mehrotra - Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the developer portfolio of Ayush Mehrotra, showcasing advanced skills in web development and design."
        />
        <meta
          name="twitter:image"
          content="https://ayush-mehrotra-portfolio.vercel.app/path-to-your-image.jpg"
        />

        {/* Standard Meta Tags (Fallback) */}
        <meta name="title" content="Ayush Mehrotra - Portfolio" />
        <meta
          name="description"
          content="Explore the portfolio of Ayush Mehrotra, showcasing web development expertise and innovative projects."
        />

        {/* Additional Tags */}
        <meta property="og:site_name" content="Ayush Mehrotra Portfolio" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
