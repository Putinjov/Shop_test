import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-mobile section-space text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-ink-600">This collection or product may have moved.</p>
      <Link href="/" className="mt-4 inline-flex min-h-12 items-center rounded-full bg-ink-800 px-6 text-white">
        Back home
      </Link>
    </div>
  );
}
