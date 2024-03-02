"use client"

import Image from "next/image";

import logoBlack from "@/public/logos/aurora-black.png";
import lanternBoy from "@/public/lantern-boy.png";
import logoWhiteText from "@/public/logos/aurora-white-text.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="h-[100vh]">
      <div className="h-[58.8%]">
        <div className="absolute w-[100%] mt-6">
          <div className="flex justify-center">
            <Image
              src={logoBlack}
              alt="Aurora logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <Image
          src={lanternBoy}
          alt="Boy holding lantern"
          width={1024}
          height={100}
        />
      </div>

      <div className="h-[41.2%] bg-zinc-900 flex flex-col items-center ">
        <div className="pt-12 pb-8">
          <Image
            src={logoWhiteText}
            alt="Aurora logo"
            width={300}
            height={100}
            className="mt-0"
          />
        </div>

        <p className="text-2xl font-semibold text-white mb-4">
          Illuminate the pages of your adventure
        </p>

          <Button
            className="my-10 bg-white text-zinc-900 w-[90%] text-xl py-8"
            onClick={(e) => {
              e.preventDefault();
              router.push("/signup");
            }}
          >
            Signup
          </Button>

          <Button
            variant="outline"
            className="bg-zinc-900 text-white w-[90%] text-xl py-8"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
          >
            Login
          </Button>
      </div>
    </div>
  )
}
