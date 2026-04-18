import Link from "next/link";
import { Chip } from "@/components/ui/chip";

const sorts = [
  { value: "BEST_SELLING", label: "Best selling" },
  { value: "PRICE_ASC", label: "Price low-high" },
  { value: "PRICE_DESC", label: "Price high-low" }
];

export function FilterToolbar({
  currentSort,
  handle,
  family
}: {
  currentSort: string;
  handle: string;
  family?: string;
}) {
  const familyFilters = ["3 seater", "2 seater", "corner", "chair"];

  return (
    <div className="sticky top-14 z-20 -mx-4 flex gap-2 overflow-x-auto border-y border-ink-800/10 bg-sand-50 px-4 py-3 sm:static sm:mx-0 sm:border-0 sm:px-0">
      {sorts.map((sort) => (
        <Link key={sort.value} href={`/collections/${handle}?sort=${sort.value}${family ? `&family=${family}` : ""}`}>
          <Chip label={sort.label} active={currentSort === sort.value} />
        </Link>
      ))}
      {familyFilters.map((item) => (
        <Link key={item} href={`/collections/${handle}?sort=${currentSort}&family=${encodeURIComponent(item)}`}>
          <Chip label={item} active={family === item} />
        </Link>
      ))}
    </div>
  );
}
