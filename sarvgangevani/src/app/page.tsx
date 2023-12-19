import Image from "next/image";
import Chachaji from "./components/chacha-removebg-preview.jpg";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute">
      <section
        style={{
          textAlign: "left", // "align" should be "textAlign"
          color: "#0D1A5C",
          fontSize: 36,
          fontFamily: "monospace",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
        className="px-2"
      >
        <div>SARV GANGE VANI</div>
      </section>
      <Image src={Chachaji} alt="" className="bottom-0" />
    </main>
  );
}
