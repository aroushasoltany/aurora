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

const animals = [
  "Dog",
  "Cat",
  "Elephant",
  "Lion",
  "Dolphin",
  "Penguin",
  "Bear",
  "Rabbit",
  "Giraffe",
  "Owl"
];

export function AnimalCombobox(
  { loading, animal, setAnimal }:
  {
    loading: boolean,
    animal: string,
    setAnimal: Dispatch<SetStateAction<string>>,
  }
) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      <Label>Favourite Animal</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={loading}>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full max-w-sm justify-between"
          >
            {animal
              ? animal
              : "Select animal..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-sm p-0">
          <Command>
            <CommandInput placeholder="Search animal..." />
            <CommandEmpty>No animal found.</CommandEmpty>
            <CommandGroup>
              {animals.map((a) => (
                <CommandItem
                  key={a}
                  value={a}
                  onSelect={(currentValue) => {
                    setAnimal(currentValue === animal ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {a}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
