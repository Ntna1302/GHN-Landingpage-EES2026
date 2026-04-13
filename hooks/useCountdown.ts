"use client";

import { useState, useEffect } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  isExpired: boolean;
};

function calc(target: string): Countdown {
  const now = Date.now();
  const end = new Date(target).getTime();
  const diff = Math.max(0, end - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes, isExpired: diff <= 0 };  // ← thêm isExpired
}

export function useCountdown(
  target: string = "2026-05-01T00:00:00"
): Countdown {
  const [countdown, setCountdown] = useState<Countdown>(() => calc(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calc(target));
    }, 30_000);
    return () => clearInterval(interval);
  }, [target]);

  return countdown;
}
