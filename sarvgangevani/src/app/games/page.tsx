"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute p-4">
      {/* Container for the grid */}
      <div className="flex flex-grow gap-4">
        {/* Box 1 */}
        <a href="/g1">
          <div className="flex-grow bg-white p-4 rounded-md shadow-md h-full">
            {/* Content of Box 1 */}
            Box 1
          </div>
        </a>
        <a href="/g2">
          <div className="flex-grow bg-white p-4 rounded-md shadow-md h-full">
            {/* Content of Box 2 */}
            Box 2
          </div>
        </a>

        {/* Box 3 */}
        <a href="/g3">
          <div className="flex-grow bg-white p-4 rounded-md shadow-md h-full">
            {/* Content of Box 3 */}
            Box 3
          </div>
        </a>
      </div>
    </main>
  );
}
