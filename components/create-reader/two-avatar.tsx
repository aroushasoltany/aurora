import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";

export default function CreateReaderTwo(
  { loading, setLoading, setAvatar, setStep }:
  {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setAvatar: Dispatch<SetStateAction<string>>,
    setStep: Dispatch<SetStateAction<number>>
  }
) {
  const [background, setBackground] = useState("blue");
  const [stroke, setStroke] = useState("white");
  const [icon, setIcon] = useState("aurora");

  const configAvatar = async () => {
    setLoading(true);
    setAvatar(`${stroke}-${icon}-${background}.png`);
    setStep((p) => p + 1);
    setLoading(false);
  }

  return (
    <div className="space-y-4 w-full max-w-sm">
      <p className="text-md text-center">
        Create an avatar for your child's reader profile
      </p>
      
      <div className="w-full max-w-sm flex justify-center">
        <Image
          src={`/avatars/${stroke}-${icon}-${background}.png`}
          alt="Avatar"
          width={120}
          height={120}
        />
      </div>

      <Tabs defaultValue="background">
        <TabsList className="w-full max-w-sm">
          <TabsTrigger className="w-full" value="background">Background</TabsTrigger>
          <TabsTrigger className="w-full" value="stroke">Stroke</TabsTrigger>
          <TabsTrigger className="w-full" value="icon">Icon</TabsTrigger>
        </TabsList>
        <TabsContent value="background" className="flex flex-row w-full max-w-sm px-2 space-x-2 justify-center">
          <Image
            src={`/avatars/bgs/blue-bg.png`}
            alt="Blue background"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              background === 'blue' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setBackground('blue');
            }}
          />
          <Image
            src={`/avatars/bgs/green-bg.png`}
            alt="Green background"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              background === 'green' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setBackground('green');
            }}
          />
          <Image
            src={`/avatars/bgs/yellow-bg.png`}
            alt="Yellow background"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              background === 'yellow' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setBackground('yellow');
            }}
          />
          <Image
            src={`/avatars/bgs/red-bg.png`}
            alt="Red background"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              background === 'red' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setBackground('red');
            }}
          />
          <Image
            src={`/avatars/bgs/pink-bg.png`}
            alt="Pink background"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              background === 'pink' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setBackground('pink');
            }}
          />
          <Image
            src={`/avatars/bgs/purple-bg.png`}
            alt="Purple background"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              background === 'purple' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setBackground('purple');
            }}
          />
        </TabsContent>
        
        <TabsContent value="stroke" className="flex flex-row w-full max-w-sm px-2 space-x-2">
          <Image
            src={`/avatars/strokes/black-stroke.png`}
            alt="Black stroke"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              stroke === 'black' && "border-[#2669F8] border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setStroke('black');
            }}
          />
          <Image
            src={`/avatars/strokes/white-stroke.png`}
            alt="White stroke"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer rounded-[30px]",
              stroke === 'white'
                ? "border-[#2669F8] border-4"
                : "border-zinc-200 border-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              setStroke('white');
            }}
          />
        </TabsContent>
        <TabsContent value="icon" className="flex flex-row w-full max-w-sm px-2 space-x-2 justify-center">
          <Image
            src={`/avatars/icons/aurora-icon.png`}
            alt="Aurora icon"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              icon === 'aurora' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setIcon('aurora');
            }}
          />
          <Image
            src={`/avatars/icons/ghost-icon.png`}
            alt="Ghost icon"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              icon === 'ghost' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setIcon('ghost');
            }}
          />
          <Image
            src={`/avatars/icons/flower-icon.png`}
            alt="Flower icon"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              icon === 'flower' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setIcon('flower');
            }}
          />
          <Image
            src={`/avatars/icons/dog-icon.png`}
            alt="Dog icon"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              icon === 'dog' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setIcon('dog');
            }}
          />
          <Image
            src={`/avatars/icons/cherry-icon.png`}
            alt="Cherry icon"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              icon === 'cherry' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setIcon('cherry');
            }}
          />
          <Image
            src={`/avatars/icons/cat-icon.png`}
            alt="Cat icon"
            width={55}
            height={55}
            className={cn(
              "cursor-pointer",
              icon === 'cat' && "border-zinc-900 border-4 rounded-[30px]"
            )}
            onClick={(e) => {
              e.preventDefault();
              setIcon('cat');
            }}
          />
        </TabsContent>
      </Tabs>

      <Button
        variant={"default"}
        className="w-full max-w-sm"
        disabled={loading}
        onClick={(e) => {
          e.preventDefault();
          configAvatar();
        }}
      >
        Next
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
