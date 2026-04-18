import Link from "next/link";

const links = [
  { href: "/collections/living-room", label: "Living" },
  { href: "/collections/lounge", label: "Lounge" },
  { href: "/collections/new", label: "New" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/10 bg-sand-50/95 backdrop-blur">
      <div className="container-mobile flex min-h-14 items-center justify-between gap-4">
        <Link href="/" className="text-base font-semibold tracking-wide">
          Aster & Oak
        </Link>
        <nav className="flex items-center gap-2 overflow-x-auto text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="min-h-10 rounded-full px-3 py-2">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
