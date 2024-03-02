"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import logoBlack from "@/public/logos/aurora-black.png";

export default function Finalpage() {
const router = useRouter();
  return (
    <div className="grid h-screen grid-rows-2">
        <div className=""></div>
        <div className="bg-[#FDD2F5]">

            <div className="grid h-full grid-cols-3">
                <div className="grid h-full grid-rows-2">
                    <div className="flex justify-center items-center">
                        <Image
                        src={logoBlack}
                        alt="Aurora logo"
                        width={100}
                        height={100}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="outline">Read Again</Button>
                    </div>
                </div>
                
                <div className="grid h-full grid-rows-2">
                    <div className="flex justify-center items-center">
                        <Image
                        src={logoBlack}
                        alt="Aurora logo"
                        width={100}
                        height={100}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="outline">Save Story</Button>
                    </div>
                </div>
                
                <div className="grid h-full grid-rows-2">
                    <div className="flex justify-center items-center">
                        <Image
                        src={logoBlack}
                        alt="Aurora logo"
                        width={100}
                        height={100}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Delete Story</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                 
            </div>

        </div>
    </div>
  )
}