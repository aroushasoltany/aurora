"use client"

import Image from "next/image";


import pinkPrincessCastle from "@/public/pink-princess-castle.jpg";
import logoWhite from "@/public/logos/aurora-white.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Repeat } from "lucide-react";
import { Typewriter } from "@/components/typewriter/typewriter"


export default function Book() {
    const router = useRouter();
  return (
    <div className="bg-blue-200 h-screen" style={{
      backgroundImage: "url(/unihack.jpg)",
    }}>
      <div className="flex justify-end pt-3">
        <Image
          src={logoWhite}
          alt="Picture"
          width={50}
          height={50}
        />
        <Button
          variant="outline"
          className="bg-blue-900 text-white text-xl h-50 w-50 mx-4"
          onClick={(e) => {
            e.preventDefault();
              router.push("/");
            }}
          >
            X
        </Button>
      </div>
      <div className="h-2/5 flex justify-center items-center">
        <div className="relative w-3/4 h-[90%]">
          <Image
            src={pinkPrincessCastle}
            alt="Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="h-[40%]">
        <div className="bg-[#ffffff]/50 mx-20 rounded-lg">
          <p className="px-40 py-3 text-lg"> 
              <Typewriter text = "From that day on, Princess Sally took care of all the animals in the castle gardens. She showed them love and kindness, and they showed her love in return. Princess Sally learned that love is always kind, and it can bring so much happiness to everyone around her." delay={10}/>
          </p>
          <p className="px-40 py-3 text-lg">
            <Typewriter text = "The king and queen were so proud of their daughter for being so kind to the animals. They knew that she had a big heart and they were happy to see her so happy." delay={10}/>
          </p>
          <p className="px-40 py-3 text-lg">
          <Typewriter text = "Princess Sally's love for the animals made the castle a much happier place, and she was never lonely again. She had found love and friendship in the most unexpected places, and she knew that she would always be kind to everyone she met." delay={10}/>
          </p>
        </div>
      </div>

      <div className= "h-50 grid grid-cols-2 gap-4 content-center justify-items-center">
        <Button
          variant="outline"
          className="bg-blue-900 text-white w-[90%] text-xl py-8"
          onClick={(e) => {
            e.preventDefault();
              router.push("/book/page1");
            }}
          >
            Previous page
        </Button>

        <Button
          variant="outline"
          className="bg-blue-900 text-white w-[90%] text-xl py-8"
          onClick={(e) => {
            e.preventDefault();
              router.push("/final-page");
            }}
          >
            The end
        </Button>
      </div>

    </div>
  )
}
