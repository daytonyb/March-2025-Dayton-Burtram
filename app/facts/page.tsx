"use client";

import { Button } from "@heroui/button";
import { useState } from "react";

export default function BlogPage() {
  let facts: string[] = [
    "The Mariners have been a total of 3 games out of the playoffs in the last 2 years.",
    "Play 1. Nf3 in a chess game!",
    "Try 5D chess on steam",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className="font-mono text-6xl font-medium pb-10">
        <b>Fun Facts</b>
      </h1>
      <Button
        className="text-blue-500 hover:text-white hover:bg-slate-500"
        endContent={
          <svg
            className="lucide lucide-lightbulb"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        }
        variant="faded"
        onPress={() => {
          setFact(facts[0]);
        }}
      >
        Fun Facts
      </Button>
      <p>Facts are on About Me page, please go there instead!</p>
    </div>
  );
}
