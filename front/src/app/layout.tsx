import type { Metadata } from "next";
import "./globals.css";
import "tailwindcss/tailwind.css";
import { ApolloProvider } from "../providers/apollo"
import { Footer } from "../features/footer";

export const metadata: Metadata = {
  title: "Task App",
  icons: "task.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>{children}</ApolloProvider>
        <Footer />
      </body>
    </html>
  );
}
