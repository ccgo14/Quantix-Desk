import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Products() {
  const { products, isLoading, error, deleteProduct } = useProducts();
  const [search, setSearch] = useState("");

  if (isLoading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="loading">Error: {error}</div>;

  // filter products based on search input
  const filtered = products.filter((prod) =>
    prod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2 style={{ marginBottom: "1rem", color: "#1a1a2e" }}>All Products</h2>

      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {filtered.length === 0 ? (
        <p>No products found matching your search.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((prod) => (
            <ProductCard key={prod.id} product={prod} onDelete={deleteProduct} />
          ))}
        </div>
      )}
    </section>
  );
}
