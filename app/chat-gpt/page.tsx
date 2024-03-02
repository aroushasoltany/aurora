'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  const doIt = async () => {
    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
  });
  }
  return (
    <Button onClick={doIt}>do it</Button>
  )
}

export default page