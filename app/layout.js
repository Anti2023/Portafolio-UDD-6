import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Navibar from "@/components/Navibar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio",
  description: "Proyecto Portafolio UDD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Navibar />
        {children}
        </Provider>
      </body>
    </html>
  );
}
