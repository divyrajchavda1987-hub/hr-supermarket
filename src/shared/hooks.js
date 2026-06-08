import { useEffect, useMemo, useState } from "react";
import { readStorage, writeStorage } from "./utils";

export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => readStorage(key, initialValue));

  useEffect(() => {
    writeStorage(key, value);
  }, [key, value]);

  return [value, setValue];
}

export function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia(query).matches
      : false;
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useAutoRotate(length, delay = 3500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!length) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, delay);
    return () => window.clearInterval(timer);
  }, [delay, length]);

  return [index, setIndex];
}

export function useBodyTheme(background, color = "#10231a") {
  useEffect(() => {
    if (typeof document === "undefined" || !document.body) {
      return undefined;
    }
    const previousBackground = document.body.style.background;
    const previousColor = document.body.style.color;
    const previousMargin = document.body.style.margin;
    const previousFont = document.body.style.fontFamily;
    document.body.style.margin = "0";
    document.body.style.background = background;
    document.body.style.color = color;
    document.body.style.fontFamily = "'Segoe UI', system-ui, sans-serif";
    return () => {
      document.body.style.background = previousBackground;
      document.body.style.color = previousColor;
      document.body.style.margin = previousMargin;
      document.body.style.fontFamily = previousFont;
    };
  }, [background, color]);
}

export function useMemoizedValue(factory, deps) {
  return useMemo(factory, deps);
}
