"use client"

import Image from "next/image";


import pinkPrincessCastle from "@/public/pink-princess-castle.jpg";
import logoWhite from "@/public/logos/aurora-white.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Repeat } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from "react";


export default function Book() {
  const router = useRouter();
  const [books, setBooks] = useState('');

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
    <div className="bg-blue-200 h-screen" style={{
      backgroundImage: "url(/unihack.jpg)",
    }}>
      <div className="flex justify-end pt-3">
        <Image
          src={logoWhite}
          alt="Picture"
          width={50}
          height={50}
        />
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
      </div>
      <div>

      </div>

      <div className="grid grid-cols-2 gap-20 content-center m-3">
        
        <div className="h-2/5 flex justify-center">
          <div className="relative w-[75%] pb-8">
            <Image
              src={pinkPrincessCastle}
              alt="Picture"
              // layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="h-2/5 flex justify-center">
          <ScrollArea className="h-[620px] w-[500px] bg-gray-50/50 rounded-md border p-8">
          <div>
            <TypeAnimation
              sequence={[
                `Princess Sally lived in a beautiful castle with her kind parents, the king and queen. She had everything she could ever want, but she still felt lonely.\n\nOne day, Princess Sally decided to go for a walk in the castle gardens. As she was walking, she noticed a little bird with a broken wings. The bird looked sad and in pain. Princess Sally knew she had to help the bird.\n\nShe carefully picked up the bird and brought it to her room. She made a cozy nest for the bird and fed it some seeds and water. Every day, she would check on the bird and make sure it was comfortable\n\nAfter a few weeks, the bird's wing was all healed. Princess Sally was so happy to see the bird fly again. The bird chirped happily and Princess Sally felt a warm feeling in her heart. She realized that she had made a new friend and she wasn't lonely anymore.\n\nFrom that day on, Princess Sally took care of all the animals in the castle gardens. She showed them love and kindness, and they showed her love in return. Princess Sally learned that love is always kind, and it can bring so much happiness to everyone around her.\n\nThe king and queen were so proud of their daughter for being so kind to the animals. They knew that she had a big heart and they were happy to see her so happy.\n\nPrincess Sally's love for the animals made the castle a much happier place, and she was never lonely again. She had found love and friendship in the most unexpected places, and she knew that she would always be kind to everyone she met.`,
                1000,
              ]}
              speed={85}
              style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
              // repeat={Infinity}
              />
            </div>
          </ScrollArea>
        </div>
      </div>


      <div className= "h-50 grid grid-cols-2 gap-4 content-center justify-items-center">
        <div></div>
        <Button
          variant="outline"
          className="bg-blue-900 text-white w-[90%] text-xl py-8"
          onClick={(e) => {
            e.preventDefault();
              router.push("/final-page");
            }}
          >
            The End
        </Button>
      </div>

    </div>
  )
}


