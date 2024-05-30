import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import { icons } from "react-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noon Task",
  description: "Generated by create next app",
  icons:{
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvlXr4p8knQvkuzNbG1-gdItKO4M5F3RJLw&s"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div>
        {children}
        </div>
        </body>
    </html>
  );
}
