import { AppToast } from "@/hooks/useAppTaost";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const erodeVariable = localFont({
  src: "../../public/fonts/Erode-Variable.ttf",
});

export const metadata: Metadata = {
  title: "Aftershoot",
  description: "Aftershoot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${erodeVariable.style}`}>
        <AppToast />
        {children}
      </body>
    </html>
  );
}
