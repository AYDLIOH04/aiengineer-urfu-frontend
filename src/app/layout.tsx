import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider, Header, TanstackProvider } from "@/components";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Системы управления сложными объектами и процессами",
  description: "Магистерская программа ИРИТ-РТФ УрФУ",
  openGraph: {
    title: "Системы управления сложными объектами и процессами",
    description: "Научись разрабатывать технические системы",
    type: "website",
    locale: "ru_RU",
    url: "https://magistracy-urfu.vercel.app/",
    images: [
      "https://static.tildacdn.com/tild3235-6237-4233-b233-336365613037/-/resize/504x/Logotip_RTF.png",
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <TanstackProvider>
      <html lang="en">
        <body className={monserrat.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mt-[60px] overflow-x-hidden">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </TanstackProvider>
  );
};

export default RootLayout;
