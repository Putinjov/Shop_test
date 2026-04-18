export function Footer() {
  return (
    <footer className="mt-14 border-t border-ink-800/10 bg-white">
      <div className="container-mobile grid gap-8 py-10 text-sm text-ink-600">
        <div>
          <h2 className="mb-2 text-base font-semibold text-ink-800">Aster & Oak</h2>
          <p>Premium comfort furniture designed for urban homes.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <p>Delivery</p>
          <p>Warranty</p>
          <p>Contact</p>
          <p>Trade Program</p>
        </div>
      </div>
    </footer>
  );
}
