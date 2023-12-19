import Navbar from "./components/navbar";
import Ask from "./components/ask_anything_chachaji";
import Chachajifull from "./components/chachaji_image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-w-full bg-gradient-to-b from-[#ABEE80] via-[#6ACCFF] to-[#0061B8] absolute">
      <Navbar />
      <Ask />
      <Chachajifull />
    </main>
  );
}
