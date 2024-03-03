"use client"

import Image from "next/image";
import React, { useEffect } from 'react';
import logoBlack from "@/public/logos/aurora-black.png";
import parentAvatar from "@/public/unicorn.png";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function Profile() {
    const router = useRouter();
    // const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [profile, setProfile] = useState('');
    const [error, setError] = useState('');

    const getData = async () => {
        try {
            const response = await fetch(
                "/api/profile",
                {
                    method: "POST",
                    body: JSON.stringify({
                        
                    }),
                },
            );

            if (response.ok) {
                // setProfile(response.data);
                router.push("/profile");
            } else {
                const data = await response.json();
                if (response.status == 500) {
                    console.log(response);
                } else {
                    setError(data.message);
                }
            }
        } catch (error) {
            console.log(error);
        } 
    };

    // front-end:
    return (
        <div className="grid h-screen grid-cols-2">
            <div className="bg-blue-200">
                <div className="h-screen max-w-full flex justify-center items-center">
                        <Image
                        src={parentAvatar}
                        alt="Aurora logo"
                        width={650}
                        height={650}
                        />
                </div>
                <div className="">
                </div>
            </div>

        <div className="flex justify-center items-center">
                    
            <div className="grid h-screen grid-rows-2">
                <div className="flex justify-center items-center">
                    <Image
                        src={logoBlack}
                        alt="Aurora logo"
                        width={100}
                        height={100}
                        />
            </div>
   
                
            <div className="">
            
                <Table>
                <TableCaption>[User's] Aurora Information</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Email</TableHead>
                    <TableCell></TableCell>
                    <TableHead></TableHead>
                    <TableCell className="text-right">...@gmail.com</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableHead className="font-medium">Username</TableHead>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">AllyP</TableCell>
                    </TableRow>
                </TableBody>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Password</TableHead>
                    <TableCell></TableCell>
                    <TableHead></TableHead>
                    <TableCell className="text-right">xxxx</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableHead className="font-medium">Family</TableHead>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">Sarah</TableCell>
                    </TableRow>
                </TableBody>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Library</TableHead>
                    <TableCell></TableCell>
                    <TableHead></TableHead>
                    <TableCell className="text-right">Book1</TableCell>
                    </TableRow>
                </TableHeader>
                </Table>
            </div>
         </div>

        </div>
            
        </div>
    )
}