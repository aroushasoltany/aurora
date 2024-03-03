import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader2Icon className="mr-2 h-[250px] w-[250px] animate-spin" />
    </div>
  );
}
