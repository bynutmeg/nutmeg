"use client";

import { useEffect, useMemo, useState } from "react";

const messages = [
  "Hi! I'm Meg! 🌸",
  "Packing something special... 📦",
  "Hope you're having a cozy day! ☕",
  "You're one of our very first visitors! 🤎",
  "Can I help you choose a box?",
];

export default function Meg() {
  const [showBubble, setShowBubble] = useState(false);
  const [visible, setVisible] = useState(false);

  const message = useMemo(
    () => messages[Math.floor(Math.random() * messages.length)],
    [showBubble]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-3 right-5 z-50 transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0"
      }`}
    >
      {showBubble && (
        <div className="mb-4 w-64 rounded-3xl border border-pink-200 bg-white p-4 shadow-xl">
          <p className="text-sm leading-6 text-[#5C4335]">
            {message}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowBubble(!showBubble)}
        className="animate-[float_4s_ease-in-out_infinite]"
      >
        <img
  src="/meg-idle.png"
  alt="Meg"
  className="w-28 h-auto cursor-pointer transition duration-300 hover:scale-110 drop-shadow-xl"
/>
      </button>
    </div>
  );
}