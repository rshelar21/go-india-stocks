import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { ReduxProvider } from "@/store/provider";
import Shares from "@/components/Shares/Shares";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <ReduxProvider>
          <Navbar />
          <Shares />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
