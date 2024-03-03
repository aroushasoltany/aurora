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

const genres = [
  "Adventure",
  "Fantasy",
  "Mystery",
  "Science fiction",
  "Fairy tale",
  "Humor",
  "Superheroes",
];

export function GenreCombobox(
  { loading, genre, setGenre }:
  {
    loading: boolean,
    genre: string,
    setGenre: Dispatch<SetStateAction<string>>,
  }
) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      <Label>Favourite Genre</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={loading}>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full max-w-sm justify-between"
          >
            {genre
              ? genre
              : "Select genre..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-sm p-0">
          <Command>
            <CommandInput placeholder="Search genre..." />
            <CommandEmpty>No genre found.</CommandEmpty>
            <CommandGroup>
              {genres.map((g) => (
                <CommandItem
                  key={g}
                  value={g}
                  onSelect={(currentValue) => {
                    setGenre(currentValue === genre ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {g}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
