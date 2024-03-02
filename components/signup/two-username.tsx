"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";

export default function SignupTwo(
  { loading, setLoading, username, setUsername, setStep }:
  {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    username: string,
    setUsername: Dispatch<SetStateAction<string>>,
    setStep: Dispatch<SetStateAction<number>>
  }
) {
  const [error, setError] = useState('');

  const checkUsername = async () => {
    try {
      const response = await fetch(
        "/api/signup/two-username",
        {
          method: "POST",
          body: JSON.stringify({
            username,
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
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Create a username"
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
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
          checkUsername();
        }}
        disabled={loading}
      >
        Next
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
