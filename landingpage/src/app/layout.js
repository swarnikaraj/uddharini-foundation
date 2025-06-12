import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Hearder";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uddharini",
  description:
    "Committed to the liberation of animals, the defense of sentient life, and the cultivation of a compassionate, sustainable world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
