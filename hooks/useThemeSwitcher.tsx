import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const [mode, setMode] = useState<string>("");

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme === null) {
      setMode("dark")
    } else if (theme === "dark") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode] as const;
}
