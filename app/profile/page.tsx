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
import parentAvatar from "@/public/parent-avatar.png";

// background
// div className="bg-blue-200 h-screen" style={{
//   backgroundImage: "url(/unihack.jpg)"
// }}

// TODO
  // connect with mongo database to get user profike info
  // change avatar pic
export default function Profile() {
    const router = useRouter();
  return (
    <div>
    <div className="bg-blue-200 1/3">
      <div className="flex flex-col justify-center items-center">
        <div className="flex-1">
        <div className="h-64 flex justify-center items-center mx-auto">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Parent User"/>
              <AvatarFallback>Parent-Avatar</AvatarFallback>
            </Avatar>
            </div>
        </div>
      </div>
    
    </div>
      
    <div className="bg-blue-200 flex justify-center mx-auto mb-20" >
      <p className="font-sans text-3xl">[User's] Information</p>
    </div>

    <div>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableCell>...@gmail.com</TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableHead className="font-medium">Username</TableHead>
              <TableCell>123AllyP</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Password</TableHead>
              <TableCell>********</TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableHead className="font-medium">Children</TableHead>
              <TableCell>Name1, Name2</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Books</TableHead>
              <TableCell>title1, title2</TableCell>
            </TableRow>
          </TableHeader>
      </Table>
    </div>
    </div>
  )
}


