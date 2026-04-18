import { CollectionStrip } from "@/components/home/collection-strip";
import { Hero } from "@/components/home/hero";
import { getHomeData } from "@/lib/shopify/api";

export const revalidate = 900;

export default async function HomePage() {
  const { hero, collections } = await getHomeData();

  return (
    <>
      <Hero hero={hero} />
      {collections.map((collection) => (
        <CollectionStrip key={collection.id} collection={collection} />
      ))}
    </>
  );
}
