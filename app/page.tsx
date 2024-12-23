import { mockProducts } from "@/lib/products";
import ProductCard from "./components/product-card";
export default function Home() {
  // Shuffle once and split into sections
  const shuffledProducts = [...mockProducts].sort(() => Math.random() - 0.5);
  const bestSellers = shuffledProducts.slice(0, 4);
  const exploreProducts = shuffledProducts.slice(4, 8);

  return (
    <>
      <h1 className="text-2xl font-bold mt-6">Best Sellers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-8">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-6">Explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-8">
        {exploreProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
