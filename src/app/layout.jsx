import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/header";
import "@/styles/globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "Sliders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
