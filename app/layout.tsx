import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Blue Ocean Strategy Studio",
    template: "%s · Blue Ocean Strategy Studio",
  },
  description:
    "AI-powered Blue Ocean Strategy analysis: strategy canvas, four actions, six paths, buyer utility map, noncustomers and the strategy sequence — for any company and industry.",
  openGraph: {
    title: "Blue Ocean Strategy Studio",
    description:
      "Enter any company and industry — get a full Blue Ocean Strategy analysis with six interactive frameworks.",
    type: "website",
    siteName: "Blue Ocean Strategy Studio",
  },
  twitter: {
    card: "summary",
    title: "Blue Ocean Strategy Studio",
    description:
      "AI-powered Blue Ocean Strategy analysis with six interactive frameworks.",
  },
};

export const viewport = {
  themeColor: "#0A0E0C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
