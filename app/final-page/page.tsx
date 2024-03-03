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
import dino from "@/public/dino.png";
import bin from "@/public/bin.png";
import heart from "@/public/heart.png";

export default function Finalpage() {
const router = useRouter();
  return (
    
<div className="grid h-screen grid-rows-2">
        
        <div className="flex justify-center items-center">
                        <Image
                        src={dino}
                        alt="Aurora logo"
                        width={300}
                        height={300}
                        />
        </div>
        
        <div className="bg-orange-200">

            <div className="grid h-full grid-cols-2">
                
                <div className="grid h-full grid-rows-2">
                    <div className="flex justify-center items-center">
                        <Image
                        src={heart}
                        alt="Aurora logo"
                        width={250}
                        height={250}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Save Story</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Add your story?</AlertDialogTitle>
                            <AlertDialogDescription>
                                You can re-read saved stories in your library. You can delete this at any time.
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
                
                <div className="grid h-full grid-rows-2">
                    <div className="flex justify-center items-center">
                        <Image
                        src={bin}
                        alt="Aurora logo"
                        width={200}
                        height={200}
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