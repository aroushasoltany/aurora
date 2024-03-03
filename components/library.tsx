"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import GridComponent from "@/components/GridComponent";
import { mockbooks } from "./librarymocks";

export default function Library() {
  const router = useRouter();
  const [books, setBooks] = useState([]);



  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/library/get-books"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Button
        variant="outline"
        className="bg-blue-900 text-white text-xl h-50 w-50 mx-4"
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        X
      </Button>
      <div className="h-screen flex flex-col p-16">
        <h1 className="text-6xl text-purple-900 font-bold">Library</h1>
        <div className="bg-purple-900 w-full h-1 mt-9 mb-9"></div>
        <GridComponent books={mockbooks} />
      </div>
    </div>
  );
}
