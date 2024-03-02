"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import logoBlack from "@/public/logos/aurora-black.png";

export default function Profile() {
    const router = useRouter();
    return (
        <div className="grid h-screen grid-cols-2">
            <div className="bg-blue-200">
                <div className="p-20 flex justify-center items-center">
                        <Image
                        src={logoBlack}
                        alt="Aurora logo"
                        width={200}
                        height={200}
                        />
                </div>
                <div>
                    <p className="font-semibold text-center text-2xl">
                        Welcome [User]!
                    </p>
                </div>
            </div>

        <div className="flex justify-center items-center">
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
    )
}