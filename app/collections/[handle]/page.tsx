import { notFound } from "next/navigation";
import { CollectionGrid } from "@/components/collection/collection-grid";
import { FilterToolbar } from "@/components/collection/filter-toolbar";
import { getCollectionData } from "@/lib/shopify/api";

type Props = {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{ sort?: string; family?: string }>;
};

export default async function CollectionPage({ params, searchParams }: Props) {
  const { handle } = await params;
  const { sort = "BEST_SELLING", family } = await searchParams;
  const collection = await getCollectionData(handle, sort);

  if (!collection) notFound();

  const products = family
    ? collection.products.filter((product) => product.family.map((item) => item.toLowerCase()).includes(family.toLowerCase()))
    : collection.products;

  return (
    <section className="section-space">
      <div className="container-mobile space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">{collection.title}</h1>
          <p className="text-sm text-ink-600">{collection.description}</p>
        </div>
        <FilterToolbar currentSort={sort} handle={handle} family={family} />
        <CollectionGrid products={products} />
      </div>
    </section>
  );
}
