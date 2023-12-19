import Image from "next/image";
import Chachaji from "./components/chacha-removebg-preview.jpg";
import Boat from "./components/boat.png";
export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute">
        <div className="absolute inset-0 m-auto flex flex-col items-center justify-center">
          <div className="z-10">
            <h1 className="text-5xl font-bold text-black font-mono absolute top-0 p-4 left-0 w-1/3">SARV GANGE VANI</h1>
          </div>
          <div className="z-10 flex space-x-4 absolute top-0 px-4 py-6 right-0">
            <a href="/games" className="text-black text-lg">
              Games
            </a>
            <a href="/quiz" className="text-black text-lg">
              Quiz
            </a>
            <a href="/news" className="text-black text-lg">
              News
            </a>
            <a href="/about" className="text-black text-lg">
              About Us
            </a>
          </div>
          <div className="z-10 mt-12">
            <a href="">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
              Click to start!
            </button>
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-1/3">
            <Image
              src={Chachaji}
              alt="Illustration of Chachaji in traditional attire dancing"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3">
            <Image
             src={Boat}
              alt="Illustration of children in a boat with balloons and a flag"
              width={500}
              height={500}
            />
          </div>
        </div>
    </main>
  );
}
