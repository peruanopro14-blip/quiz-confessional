import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M9 17.5V7.2l8-1.7v9.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17.6" r="2.2" fill="currentColor" />
        <path
          d="M17 14.9c1.6 0 2.6 1 2.6 2.2 0 1.8-2.6 3.4-2.6 3.4s-2.6-1.6-2.6-3.4c0-1.2 1-2.2 2.6-2.2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-xl font-extrabold tracking-tight",
          dark ? "text-night-foreground" : "text-gradient-brand",
        )}
      >
        AmorCantado
      </span>
    </Link>
  );
}
