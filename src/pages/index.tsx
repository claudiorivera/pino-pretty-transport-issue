import { Inter } from "next/font/google";
import { logger } from "~/lib/logger";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  logger.info("hello world");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>hello world</h1>
    </main>
  );
}
