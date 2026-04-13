"use client";

import { useState, useEffect, useCallback } from "react";

export type Step = "splash" | "main" | "gate";

export function useHistoryStep() {
  const [step, setStep] = useState<Step | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Khởi tạo: kiểm tra state hiện tại của browser
  useEffect(() => {
    const state = window.history.state;

    if (!state || !state.step) {
      // Nếu vào web lần đầu, găm "splash" vào history
      window.history.replaceState({ step: "splash" }, "");
      setStep("splash");
    } else {
      // Nếu user reload trang, khôi phục lại bước họ đang đứng
      setStep(state.step);
    }

    setIsReady(true);
  }, []);

  // CHỈ GIỮ LẠI MỘT HÀM ADVANCE NÀY
const advance = useCallback((nextStep: Step, replace = false) => {
  setStep(nextStep);
  if (replace) {
    window.history.replaceState({ step: nextStep }, "");
  } else {
    // Mặc định là dùng pushState để tạo một bước mới trong lịch sử
    window.history.pushState({ step: nextStep }, "");
  }
}, []);

  // Lắng nghe nút Back/Forward của trình duyệt
  useEffect(() => {
    const handlePop = (e: PopStateEvent) => {
      const s = e.state?.step;
      if (s === "splash" || s === "main" || s === "gate") {
        setStep(s);
      }
    };

    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return { step, advance, isReady };
}