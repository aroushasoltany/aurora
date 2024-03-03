"use client";

import Image from "next/image";
import logoBlackText from "@/public/logos/aurora-black-text.png";
import landingImg from "@/public/lantern-boy.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-row">
      <div className="flex-1 bg-[#2669F8] flex items-center">
        <Image
          src={landingImg}
          alt="Landing image"
          width={800}
          height={100}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-5">
        <Image
          src={logoBlackText}
          alt="Aurora logo"
          width={200}
          height={100}
        />
        <h3 className="font-semibold text-lg">
          Illuminate the pages of your adventure
        </h3>

        <Button
          variant={"default"}
          className="w-full max-w-sm"
          onClick={(e) => {
            e.preventDefault();
            router.push("/signup");
          }}
        >
          Create an account
        </Button>

        <Button
          variant={"secondary"}
          className="w-full max-w-sm"
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
