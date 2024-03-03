"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import GridComponent from "@/components/ui/GridComponent";

export default function Finalpage() {
  const router = useRouter();
  const [books, setBooks] = useState([]);

  const mockbooks = [
    {
      bookId: 1,
      title: "Book One",
      author: "parent one",
      created: "07/02/24",
      contents:
        "ajfoewabsvpoianfopenwa afoinewapoifnveapowinv afdnaewpofinpoewaniopi",
      cover: "nope",
      readers: ["katherine", "arousha"],
    },
    {
      bookId: 2,
      title: "Book Two",
      author: "parent one",
      created: "09/02/24",
      contents:
        "ajfoewabsvpoianfopenwa afoinewapoifnveapowinv afdnaewpofinpoewaniopi",
      cover: "nope",
      readers: ["katherine", "arousha"],
    },
    {
      bookId: 3,
      title: "Book Three",
      author: "parent one",
      created: "07/02/24",
      contents:
        "ajfoewabsvpoianfopenwa afoinewapoifnveapowinv afdnaewpofinpoewaniopi",
      cover: "nope",
      readers: ["katherine", "arousha"],
    },
    {
      bookId: 4,
      title: "Book Four",
      author: "parent one",
      created: "09/02/24",
      contents:
        "ajfoewabsvpoianfopenwa afoinewapoifnveapowinv afdnaewpofinpoewaniopi",
      cover: "nope",
      readers: ["katherine", "arousha"],
    },
    {
      bookId: 5,
      title: "Book Five",
      author: "parent one",
      created: "07/02/24",
      contents:
        "ajfoewabsvpoianfopenwa afoinewapoifnveapowinv afdnaewpofinpoewaniopi",
      cover: "nope",
      readers: ["katherine", "arousha"],
    },
    {
      bookId: 6,
      title: "Book Six",
      author: "parent one",
      created: "09/02/24",
      contents:
        "ajfoewabsvpoianfopenwa afoinewapoifnveapowinv afdnaewpofinpoewaniopi",
      cover: "nope",
      readers: ["katherine", "arousha"],
    },
  ];

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
        <h1 className="text-6xl text-purple-400 font-bold">Library</h1>
        <div className="bg-purple-400 w-full h-1 mt-9 mb-9"></div>
        <GridComponent books={mockbooks} />
      </div>
    </div>
  );
}
