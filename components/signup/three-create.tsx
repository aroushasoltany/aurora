"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function SignupThree(
  { router, loading, setLoading, email, username, setStep }:
  {
    router: AppRouterInstance,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    email: string,
    username: string,
    setStep: Dispatch<SetStateAction<number>>
  }
) {
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const createUser = async () => {
    try {
      // TODO: need to add the parent's username to session storage
      const response = await fetch(
        "/api/signup/three-create",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            username,
            password,
            confirmPassword,
          }),
        },
      );
  
      if (response.ok) {
        router.push("/create-reader")
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
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Create a password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
          disabled={loading}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Re-enter your password"
          onChange={(e) => {
            e.preventDefault();
            setConfirmPassword(e.target.value);
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
          createUser();
        }}
        disabled={loading}
      >
        Create account
      </Button>

        <Button
          variant={"ghost"}
          onClick={(e) => {
            e.preventDefault();
            setStep((p) => p - 1);
          }}
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" /> Back
        </Button>
    </div>
  )
}
