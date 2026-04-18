import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="container-mobile flex min-h-14 items-center justify-between">
        <Link href="/" className="text-base font-semibold text-stone-900">
          Atelier Home
        </Link>
        <nav className="flex items-center gap-1 text-sm text-stone-700">
          <Link href="#" className="rounded-full px-3 py-2">
            Collections
          </Link>
          <Link href="#" className="rounded-full px-3 py-2">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
