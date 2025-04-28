"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
      <p className="text-muted-foreground mb-6">Something went wrong during authentication. Please try again.</p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
}
