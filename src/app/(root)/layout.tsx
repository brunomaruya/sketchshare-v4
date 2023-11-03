import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "../../../providers/Provider";
import Navbar from "../../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | SketchShare",
    default: "SketchShare", // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className="bg-background text-text">
        <Provider>
          <Navbar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
