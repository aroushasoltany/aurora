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



// WORKING ON PROFILE FRONT END
export default function Profile() {
    const router = useRouter();
  return (
    <div className="bg-blue-200 h-screen">
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex-1">
        <div className="h-64 flex justify-center items-center mx-auto">
            <Avatar>
              <AvatarImage src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-blue-circle-png-image_2381949.jpg" alt="@shadcn"/>
              <AvatarFallback>Parent-Avatar</AvatarFallback>
            </Avatar>
            </div>
        </div>
      </div>
    </div>
      
    <div className="flex justify-center mx-auto mb-20" >
      <p>[User's] Information</p>
    </div>

    <div>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableHead>...@gmail.com</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Username</TableCell>
              <TableCell>123AllyP</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Password</TableHead>
              <TableHead>********</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Children</TableCell>
              <TableCell>Name1, Name2</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Books</TableHead>
              <TableHead>title1, title2</TableHead>
            </TableRow>
          </TableHeader>
      </Table>
    </div>

    </div>
  )
}


