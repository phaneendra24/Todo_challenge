import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./_uicomponents/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo list application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="relative w-[100vw]] flex h-screen overflow-hidden ">
        <Sidebar />
        <div className="h-[100vh] w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
