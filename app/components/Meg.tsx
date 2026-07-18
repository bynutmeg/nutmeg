"use client";

import { useEffect, useState } from "react";

const introMessages = [
  "👋 Hi! I'm Meg.",
  "🌰 Welcome to Nutmeg!",
  "✨ Everything here is chosen with care.",
  "📦 We're getting ready for launch.",
  "💛 Enjoy looking around!",
];

export default function Meg() {
  const [showBubble, setShowBubble] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Show bubble after 2 seconds
    timers.push(
      setTimeout(() => {
        setShowBubble(true);
      }, 2000)
    );

    // Message sequence
    timers.push(setTimeout(() => setMessageIndex(1), 6000));
    timers.push(setTimeout(() => setMessageIndex(2), 12000));
    timers.push(setTimeout(() => setMessageIndex(3), 18000));
    timers.push(setTimeout(() => setMessageIndex(4), 24000));

    // Close bubble automatically
    timers.push(
      setTimeout(() => {
        setShowBubble(false);
      }, 30000)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {showBubble && (
        <div className="mb-3 w-64 rounded-3xl border border-pink-200 bg-white p-4 shadow-xl">
          <p className="text-sm leading-6 text-[#5C4335]">
            {introMessages[messageIndex]}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowBubble((prev) => !prev)}
        className="animate-[float_4s_ease-in-out_infinite]"
      >
        <img
          src="/meg-idle.png"
          alt="Meg"
          className="w-28 h-auto cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-xl"
        />
      </button>
    </div>
  );
}