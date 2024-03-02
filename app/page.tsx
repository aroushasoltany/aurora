"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const bla = async () => {
    await fetch(
      '/api/rand',
      {
        method: 'POST',
      }
    )
  };
  return (
    <div>
      <Button
        onClick={bla}
      >Hello ARRYROUSA!</Button>
    </div>
  );
}
