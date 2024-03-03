"use client";

import Image from "next/image";
import logoBlack from "@/public/logos/aurora-black.png";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import CreateReaderOne from "@/components/create-reader/one-details";
import CreateReaderTwo from "@/components/create-reader/two-avatar";
import CreateReaderThree from "@/components/create-reader/three-favs";

export default function CreateReader() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [dob, setDob] = useState<Date>();
  const [gender, setGender] = useState('other');
  const [avatar, setAvatar] = useState('');
  const [step, setStep] = useState(2);
  
  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center">
      <div className="bg-white w-2/5 h-4/5 rounded-md p-10 flex flex-col items-center space-y-5">
        <Image
          src={logoBlack}
          alt="Aurora logo"
          width={50}
          height={50}
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
          Create a Reader
        </h2>

        {
          step === 1
          ? <CreateReaderOne
            loading={loading}
            setLoading={setLoading}
            name={name}
            setName={setName}
            dob={dob}
            setDob={setDob}
            gender={gender}
            setGender={setGender}
            setStep={setStep}
          />
          : step === 2
          ? <CreateReaderTwo
            loading={loading}
            setLoading={setLoading}
            setAvatar={setAvatar}
            setStep={setStep}
          />
          : step === 3
          && <CreateReaderThree
          />
        }
      </div>
    </div>
  )
}
