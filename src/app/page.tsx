"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Perform client-side redirection
    redirect("/home");
  }, []);

  return <div>Loading...</div>;
}
