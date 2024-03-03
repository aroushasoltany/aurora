"use client";

import Image from "next/image";
import logoBlack from "@/public/logos/aurora-black.png";
import landingImg from "@/public/lantern-boy.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const doLogin = async () => {
    try {
      const response = await fetch(
        "/api/login",
        {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
        },
      );
  
      if (response.ok) {
        router.push("/");
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
        <h2 className="font-semibold text-3xl">
          Welcome Back!
        </h2>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Username</Label>
          <Input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            disabled={loading}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            disabled={loading}
          />
        </div>

        <div className="w-full max-w-sm flex items-start">
          <p className="text-sm text-destructive">
            {error}
          </p>
        </div>

        <div className="w-full max-w-sm flex justify-end">
          <Button
            variant={"ghost"}
            disabled={loading}
          >
            Forgot your password?
          </Button>
        </div>

        <Button
          variant={"default"}
          className="w-full max-w-sm"
          onClick={(e) => {
            e.preventDefault();
            setLoading(true);
            doLogin();
          }}
          disabled={loading}
        >
          Login
        </Button>

        <div className="h-[20px] my-3 flex items-center w-full max-w-sm">
          <div className="w-full max-w-sm bg-zinc-200 h-[1px] flex justify-center items-center">
            <p className="w-fit px-2 text-muted-foreground text-xs bg-white">
              Don't have an account?
            </p>
          </div>
        </div>
        
        <Button
          variant={"secondary"}
          className="w-full max-w-sm"
          onClick={(e) => {
            e.preventDefault();
            router.push("/signup");
          }}
          disabled={loading}
        >
          Create an account
        </Button>
      </div>

    </div>
  )
}
