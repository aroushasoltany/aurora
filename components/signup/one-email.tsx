"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function SignupOne(
  { router, loading, setLoading, email, setEmail, setStep }:
  {
    router: AppRouterInstance,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    email: string,
    setEmail: Dispatch<SetStateAction<string>>,
    setStep: Dispatch<SetStateAction<number>>
  }
) {
  const [error, setError] = useState('');

  const checkEmail = async () => {
    try {
      const response = await fetch(
        "/api/signup/one-email",
        {
          method: "POST",
          body: JSON.stringify({
            email,
          }),
        },
      );
  
      if (response.ok) {
        setStep((p) => p + 1);
      } else {
        const data = await response.json();
        if (response.status === 500) {
          console.log(response);
        } else {
          setError(data.message);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 w-full max-w-sm">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
          disabled={loading}
        />
      </div>

      <div className="w-full max-w-sm flex items-start">
        <p className="text-sm text-destructive">
          {error}
        </p>
      </div>

      <Button
        variant={"default"}
        className="w-full max-w-sm"
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          checkEmail();
        }}
        disabled={loading}
      >
        Next
      </Button>

      <div className="h-[20px] my-3 flex items-center w-full max-w-sm">
        <div className="w-full max-w-sm bg-zinc-200 h-[1px] flex justify-center items-center">
          <p className="w-fit px-2 text-muted-foreground text-xs bg-white">
            Already have an account?
          </p>
        </div>
      </div>
      
      <Button
        variant={"secondary"}
        className="w-full max-w-sm"
        onClick={(e) => {
          e.preventDefault();
          router.push("/login");
        }}
        disabled={loading}
      >
        Login
      </Button>
    </div>
  )
}
