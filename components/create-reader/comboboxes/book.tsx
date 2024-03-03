"use client"

import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Dispatch, SetStateAction, useState } from "react"
import { Label } from "@/components/ui/label"

const books = [
  "Peter Pan by J.M. Barrie",
  "Alice's Adventures in Wonderland by Lewis Carroll",
  "The Secret Garden by Frances Hodgson Burnett",
  "Percy Jackson & the Olympians series by Rick Riordan",
  "Diary of a Wimpy Kid series by Jeff Kinney",
  "The Magic Tree House series by Mary Pope Osborne",
  "The Cat in the Hat by Dr. Seuss",
  "Charlie and the Chocolate Factory by Roald Dahl",
  "The Tale of Peter Rabbit by Beatrix Potter",
  "Harry Potter series by J.K. Rowling",
  "The Chronicles of Narnia series by C.S. Lewis",
  "Where the Wild Things Are by Maurice Sendak",
  "Charlotte's Web by E.B. White",
  "Matilda by Roald Dahl",
  "The Very Hungry Caterpillar by Eric Carle",
  "Winnie-the-Pooh by A.A. Milne",
  "Goodnight Moon by Margaret Wise Brown",
];

export function BookCombobox(
  { loading, book, setBook }:
  {
    loading: boolean,
    book: string,
    setBook: Dispatch<SetStateAction<string>>,
  }
) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      <Label>Favourite Book</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={loading}>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full max-w-sm justify-between"
          >
            {book
              ? book
              : "Select book..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-sm p-0 h-[250px]">
          <Command>
            <CommandInput placeholder="Search book..." />
            <CommandEmpty>No book found.</CommandEmpty>
            <CommandGroup>
              {books.map((b) => (
                <CommandItem
                  key={b}
                  value={b}
                  onSelect={(currentValue) => {
                    setBook(currentValue === book ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {b}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
