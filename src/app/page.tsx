'use client'
import CardModoJogo from "@/components/CardModoJogo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  // useEffect(() => {
  //   router.push('/game')
  // }, [])

  return (
    <div className="flex min-h-dvh w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        header
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.32))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 items-center justify-center">
        <div className=" w-full sm:max-w-screen-sm">
        <CardModoJogo />
        </div>
      </main>
      <footer className="flex h-16 items-center gap-4 border-t bg-background px-4 md:px-6">
        footer
      </footer>
    </div>
  );
}
