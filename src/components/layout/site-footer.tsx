export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="container-mobile py-8 text-sm text-stone-500">© {new Date().getFullYear()} Atelier Home</div>
    </footer>
  );
}
