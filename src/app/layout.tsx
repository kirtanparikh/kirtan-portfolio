import DarkReaderBlocker from "@/components/DarkReaderBlocker";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirtan Parikh - Full Stack Developer",
  description:
    "Portfolio of Kirtan Parikh - Computer Science Engineering student and Full Stack Developer specializing in React, Node.js, and cloud technologies",
  keywords: [
    "Kirtan Parikh",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
    "Computer Science",
  ],
  authors: [{ name: "Kirtan Parikh" }],
  creator: "Kirtan Parikh",
  colorScheme: "dark",
  themeColor: "#000000",
  other: {
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      data-theme="dark"
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* Prevent Dark Reader and similar extensions */}
        <meta name="darkreader-lock" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Force dark theme detection for extensions */
            :root {
              color-scheme: dark !important;
              --darkreader-neutral-background: #000000 !important;
              --darkreader-neutral-text: #ffffff !important;
            }
            html {
              color-scheme: dark !important;
              background: #000000 !important;
            }
            html[data-darkreader-mode] {
              background: #000000 !important;
            }
            /* Block Dark Reader specifically */
            [data-darkreader-inline-bgcolor],
            [data-darkreader-inline-color] {
              background-color: unset !important;
              color: unset !important;
            }
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-black text-white`}
        style={{ colorScheme: "dark" }}
        data-theme="dark"
        suppressHydrationWarning={true}
      >
        <DarkReaderBlocker />
        {children}
      </body>
    </html>
  );
}
