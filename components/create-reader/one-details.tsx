"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns"

export default function CreateReaderOne(
  { loading, setLoading, name, setName, dob, setDob, gender, setGender, setStep }:
  {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    dob: Date | undefined,
    setDob: Dispatch<SetStateAction<Date | undefined>>,
    gender: string,
    setGender: Dispatch<SetStateAction<string>>,
    setStep: Dispatch<SetStateAction<number>>,
  }
) {
  
  const [error, setError] = useState(false);
  

  const checkDetails = () => {
    setLoading(true);
    if (!name || !dob || !gender) {
      setError(true);
    } else {
      setStep((p) => p + 1);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Enter your child's name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Birthday</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full max-w-sm justify-start text-left font-normal",
                !dob && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dob ? format(dob, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={dob}
              onSelect={setDob}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="mb-2">Gender</Label>
        <RadioGroup
          onValueChange={(v) => setGender(v)}
          defaultValue="other"
          className="space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" />
            <Label>Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" />
            <Label>Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" />
            <Label>Other</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="w-full max-w-sm flex items-start">
        <p className="text-sm text-destructive">
          {error ? "These fields are required" : ""}
        </p>
      </div>

      <Button
        variant={"default"}
        className="w-full max-w-sm"
        onClick={(e) => {
          e.preventDefault();
          checkDetails();
        }}
      >
        Next
      </Button>
    </div>
  )
}
