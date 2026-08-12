"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "./ThemeScript";

/**
 * The button renders both states and lets CSS reveal the right one, so it is
 * correct before hydration and can never mismatch between server and client.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for
      // this page view, it just will not persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex h-10 w-10 items-center justify-center border border-line text-fg transition-colors duration-200 hover:border-accent hover:text-accent ${className}`}
    >
      <span className="theme-when-light">
        <Moon aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <span className="theme-when-dark">
        <Sun aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <span className="sr-only theme-when-light">Switch to dark theme</span>
      <span className="sr-only theme-when-dark">Switch to light theme</span>
    </button>
  );
}
