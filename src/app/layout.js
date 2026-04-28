import "./globals.css";
import { avenir } from "@/lib/fonts";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata = {
  title: "Victoria Falls",
  description: "Luxury accommodation in Victoria Falls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={avenir.variable}>     
    <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
