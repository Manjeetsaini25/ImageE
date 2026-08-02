import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { FloatingShapes } from "../components/floating-shapes";
import { Toaster } from "../components/ui/sonner";
import { shadesOfPurple } from "@clerk/themes";
import Header from "../components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pixxel",
  description: "Ai based Image Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider>
        <ClerkProvider
         publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            appearance={{
              baseTheme: shadesOfPurple,
            }}
            >
        <ConvexClientProvider>
          <Header />
          <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
            <FloatingShapes />
            <Toaster richColors />
            {children}
          </main>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
