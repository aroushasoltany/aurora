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
            <Typewriter text = "Princess Sally lived in a beautiful castle with her kind parents, the king and queen. She had everything she could ever want, but she still felt lonely." delay={20}/>
          </p>
          <p className="px-40 py-3 text-lg"> 
            <Typewriter text = "One day, Princess Sally decided to go for a walk in the castle gardens. As she was walking, she noticed a little bird with a broken wing. The bird looked sad and in pain. Princess Sally knew she had to help the bird." delay={20}/>
          </p>
          <p className="px-40 py-3 text-lg"> 
            <Typewriter text = "She carefully picked up the bird and brought it to her room. She made a cozy nest for the bird and fed it some seeds and water. Every day, she would check on the bird and make sure it was comfortable." delay={20}/>
          </p>
          <p className="px-40 py-3 text-lg"> 
            <Typewriter text = "After a few weeks, the bird's wing was all healed. Princess Sally was so happy to see the bird fly again. The bird chirped happily and Princess Sally felt a warm feeling in her heart. She realized that she had made a new friend and she wasn't lonely anymore." delay={20}/>
          </p>

        </div>
      </div>

      <div className= "h-50 grid grid-cols-2 gap-4 content-center justify-items-center">
        <div></div>
        <Button
          variant="outline"
          className="bg-blue-900 text-white w-[90%] text-xl py-8"
          onClick={(e) => {
            e.preventDefault();
              router.push("/book/page2");
            }}
          >
            Next page
        </Button>
      </div>

    </div>
  )
}


