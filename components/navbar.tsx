"use client";

import { BookPlusIcon, HeartIcon, LibraryBigIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-zinc-800 h-24 w-[35%] flex flex-row space-x-2 rounded-lg items-center justify-around px-4">
      <Button
        variant={"default"}
        className={cn(
          "w-16 h-16",
          pathname === "/library" ? "bg-[#2669F8]" : "bg-zinc-800"
        )}
        onClick={(e) => {
          e.preventDefault();
          router.push("/library");
        }}
      >
        <LibraryBigIcon className="w-11 h-11 text-white" />
      </Button>

      <Button
        variant={"default"}
        className={cn(
          "w-16 h-16",
          pathname === "/social" ? "bg-[#2669F8]" : "bg-zinc-800"
        )}
        onClick={(e) => {
          e.preventDefault();
          router.push("/social");
        }}
      >
        <HeartIcon className="w-11 h-11 text-white" />
      </Button>

      <Button
        variant={"default"}
        className={cn(
          "w-16 h-16",
          pathname === "/new-book" ? "bg-[#2669F8]" : "bg-zinc-800"
        )}
        onClick={(e) => {
          e.preventDefault();
          router.push("/new-book");
        }}
      >
        <BookPlusIcon className="w-11 h-11 text-white" />
      </Button>

      <Button
        variant={"default"}
        className={cn(
          "w-16 h-16",
          pathname === "/profile" ? "bg-[#2669F8]" : "bg-zinc-800"
        )}
        onClick={(e) => {
          e.preventDefault();
          router.push("/profile");
        }}
      >
        <UserIcon className="w-11 h-11 text-white" />
      </Button>
      
      
      
      
    </div>
  )
}
