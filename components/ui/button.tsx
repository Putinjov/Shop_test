import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const shared =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-accent text-white focus-visible:outline-accent"
      : "border border-ink-800/20 bg-white text-ink-800 focus-visible:outline-ink-800";

  const classes = clsx(shared, styles, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
