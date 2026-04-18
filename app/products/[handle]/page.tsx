import { notFound } from "next/navigation";
import { CompleteSet } from "@/components/product/complete-set";
import { ProductDetails } from "@/components/product/product-details";
import { ProductGallery } from "@/components/product/product-gallery";
import { getProductData, getProductsByHandles } from "@/lib/shopify/api";

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await getProductData(handle);

  if (!product) notFound();

  const completeSetProducts = await getProductsByHandles(product.completeTheSet);

  return (
    <>
      <section className="section-space">
        <div className="container-mobile grid gap-5 sm:gap-8 md:grid-cols-2">
          <ProductGallery product={product} />
          <ProductDetails product={product} />
        </div>
      </section>
      <CompleteSet products={completeSetProducts} />
    </>
  );
}
