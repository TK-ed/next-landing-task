import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zephyr",
  description: "Simple Landing page for startups",
  keywords: "Next, Next.js, FullStack, Framework, Javascript, Typescript, MongoDB, TailwindCSS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between min-h-[47rem]`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
