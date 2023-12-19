import Image from "next/image";
import Chachaji from "./components/chacha-removebg-preview.jpg";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute">
      <div className="relative bg-blue-300 h-screen">
        <div className="absolute inset-0 m-auto flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-yellow-300"></div>
          <div className="z-10">
            <h1 className="text-6xl font-bold text-white">SARV GANGE VANI</h1>
          </div>
          <div className="z-10 flex space-x-4 mt-8">
            <a href="#" className="text-white text-lg">
              Games
            </a>
            <a href="#" className="text-white text-lg">
              FAQ's
            </a>
            <a href="#" className="text-white text-lg">
              News
            </a>
            <a href="#" className="text-white text-lg">
              About Us
            </a>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-full shadow-lg">
              Chat Now
            </button>
          </div>
          <div className="z-10 mt-12">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
              Click to start!
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-1/3">
            <Image
              src={Chachaji}
              alt="Illustration of Chachaji in traditional attire dancing"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3">
            <Image
              src="https://placehold.co/500x500.png?text=Children+in+a+boat+with+balloons+and+a+flag"
              alt="Illustration of children in a boat with balloons and a flag"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
