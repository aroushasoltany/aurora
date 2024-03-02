"use client"

import Image from "next/image";


import pinkPrincessCastle from "@/public/pink-princess-castle.jpg";
import logoWhite from "@/public/logos/aurora-white.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Book() {
    const router = useRouter();
  return (
    <div className="bg-blue-200 h-screen" style={{
      backgroundImage: "url(/unihack.jpg)"
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

      <div className= "h-56 grid grid-cols-2 gap-4 content-center justify-items-center">
        <Button
          variant="outline"
          className="bg-blue-900 text-white w-[90%] text-xl py-8"
          onClick={(e) => {
            e.preventDefault();
              router.push("/--");
            }}
          >
            Previous page
        </Button>

        <Button
          variant="outline"
          className="bg-blue-900 text-white w-[90%] text-xl py-8"
          onClick={(e) => {
            e.preventDefault();
              router.push("/--");
            }}
          >
            Next page
        </Button>
      </div>

    </div>
  )
}


