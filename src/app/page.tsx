"use client"
import React, { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <main>
      Main 
      <button onClick={handleClick}>Like {likes}: </button>
    </main>
  );
}
