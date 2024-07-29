import { Background } from "@/components/Widgets";

import dynamic from "next/dynamic";
const MainPage = dynamic(() => import("@/components/MainPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen backdrop-blur-lg bg-black">
      <MainPage />
      <Background />
    </main>
  );
}
