import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { Navbar } from "@/components/(client)/Navbar";
import { ThemeProvider } from "@/components/(client)/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProviders from "./providers/ReactQueryProviders";
import { ClientCookiesProvider } from "./providers/CookiesProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <Navbar />
          {children}
          <Toaster />
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
