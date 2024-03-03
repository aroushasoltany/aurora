"use client";

import { GenreCombobox } from "@/components/create-reader/comboboxes/genre";
import { BookCombobox } from "./comboboxes/book";
import { AnimalCombobox } from "./comboboxes/animal";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function CreateReaderThree(
  { router, name, dob, gender, avatar, setStep }:
  {
    router: AppRouterInstance,
    name: string,
    dob: Date | undefined,
    gender: string,
    avatar: string,
    setStep: Dispatch<SetStateAction<number>>
  }
) {
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState('');
  const [book, setBook] = useState('');
  const [animal, setAnimal] = useState('');
  const [error, setError] = useState(false);

  const doCreateReader = async () => {
    setLoading(true);
    if (!genre || !book || !animal) {
      setError(true);
      setLoading(false);
    } else {
      try {
        const response = await fetch(
          "/api/create-reader",
          {
            method: "POST",
            body: JSON.stringify({
              name,
              dob,
              gender,
              avatar,
              favs: {
                genre,
                book,
                animal,
              },
            }),
          },
        );

        if (response.ok) {
          router.push("/home");
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      <GenreCombobox
        loading={loading}
        genre={genre}
        setGenre={setGenre}
      />
      <BookCombobox
        loading={loading}
        book={book}
        setBook={setBook}
      />
      <AnimalCombobox
        loading={loading}
        animal={animal}
        setAnimal={setAnimal}
      />

        {
          error && <div className="w-full max-w-sm">
            <p className="text-sm text-destructive">
              All these fields are required
            </p>
          </div>
        }
        

      <Button
        variant={"default"}
        className="w-full max-w-sm"
        disabled={loading}
        onClick={(e) => {
          e.preventDefault();
          doCreateReader();
        }}
      >
        Create reader
      </Button>

      <Button
        variant={"ghost"}
        onClick={(e) => {
          e.preventDefault();
          setStep((p) => p - 1);
        }}
        disabled={loading}
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" /> Back
      </Button>
    </div>
  )
}
