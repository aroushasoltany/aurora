"use client";

import Landing from "@/components/landing";
import Library from "@/components/library";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";

export default function Root() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const response = await fetch(
        "/api/auth",
        {
          method: "POST",
        },
      );
  
      if (response.ok || response.status === 401) {
        const data = await response.json();
        setAuth(data.auth);
      } else {
        console.log(response)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (auth) {
    return (
      <Library />
    );
  }

  return (
    <Landing />
  );
}
