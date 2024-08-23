import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work | Vision",
  description: "Matthew Negasi's Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col ${inter.className} `}>
        <section className="h-[100vh] flex flex-col  dark:bg-background">
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </ThemeProvider>
        </section>
      </body>
    </html>
  );
}
