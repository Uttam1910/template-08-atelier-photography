"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { contact } from "@/content/contact";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link
            href="/"
            className="font-display text-2xl tracking-tight text-fg"
            aria-label={`${site.name} — home`}
          >
            {site.name}
            <span className="text-accent">.</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {primaryNav.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`link-rule text-sm tracking-tight transition-colors duration-200 hover:text-accent ${
                        current ? "text-accent" : "text-fg"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => (open ? close() : setOpen(true))}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-fg transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              )}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Mobile" className="px-6 py-10 sm:px-8">
          <ul className="flex flex-col">
            {primaryNav.map((item, index) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline justify-between gap-4 py-5 font-display text-4xl tracking-tight transition-colors duration-200 ${
                      current ? "text-accent" : "text-fg"
                    }`}
                  >
                    {item.label}
                    <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 space-y-2">
            <p className="eyebrow">Commissions</p>
            <a
              href={`mailto:${contact.channels[0]?.value ?? ""}`}
              onClick={() => setOpen(false)}
              className="link-rule inline-block text-lead text-fg"
            >
              {contact.channels[0]?.value}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
