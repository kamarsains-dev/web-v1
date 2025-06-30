import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const font1 = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kamar Sains",
  description: "Find the Reason to Learn",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={font1.className}
        >
          {children}
        </body>
      </html>  
  );
}
