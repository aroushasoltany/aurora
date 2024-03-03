"use client";

import { GenreCombobox } from "@/components/create-reader/comboboxes/genre";
import { BookCombobox } from "./comboboxes/book";
import { AnimalCombobox } from "./comboboxes/animal";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function CreateReaderThree(
  { setStep }:
  {
    setStep: Dispatch<SetStateAction<number>>
  }
) {
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState('');
  const [book, setBook] = useState('');
  const [animal, setAnimal] = useState('');

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

      <Button
        variant={"default"}
        className="w-full max-w-sm"
      >
        Create reader
      </Button>

      <Button
        variant={"ghost"}
        onClick={(e) => {
          e.preventDefault();
          setStep((p) => p - 1);
        }}
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" /> Back
      </Button>
    </div>
  )
}
