"use client";

import Image from "next/image";
import logoBlack from "@/public/logos/aurora-black.png";
import landingImg from "@/public/lantern-boy.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import SignupOne from "@/components/signup/one-email";
import SignupTwo from "@/components/signup/two-username";
import SignupThree from "@/components/signup/three-create";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

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
          src={logoBlack}
          alt="Aurora logo"
          width={60}
          height={60}
        />

        <div className="w-full max-w-sm flex flex-col items-center space-y-2">
          <p className="w-fit px-2 text-muted-foreground text-xs bg-white uppercase">
            STEP {step}
          </p>

          <Progress
            value={100/3 * step}
            className="w-full max-w-sm"
          />
        </div>

        <h2 className="font-semibold text-3xl">
          Welcome to Aurora!
        </h2>

        {
          step === 1
          ? <SignupOne
            router={router}
            loading={loading}
            setLoading={setLoading}
            email={email}
            setEmail={setEmail}
            setStep={setStep}
          />
          : step === 2
          ? <SignupTwo
            loading={loading}
            setLoading={setLoading}
            username={username}
            setUsername={setUsername}
            setStep={setStep}
          />
          : step === 3
          && <SignupThree
            router={router}
            loading={loading}
            setLoading={setLoading}
            email={email}
            username={username}
            setStep={setStep}
          />
        }
        
      </div>

    </div>
  )
}
