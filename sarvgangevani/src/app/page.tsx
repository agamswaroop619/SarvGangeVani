import Image from "next/image";
import Chachaji from "./components/chacha-removebg-preview.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute">
      <div
        style={{
          textAlign: "right",
          color: "#0D1A5C",
          fontSize: 36,
          fontFamily: "Righteous",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        SARV GANGE VANI
      </div>
      <Image src={Chachaji} alt="" />
    </main>
  );
}
