import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, isLoading, updateProductPrice, deleteProduct } = useProducts();

  const [newPrice, setNewPrice] = useState("");

 
  const product = products.find((p) => p.id === id);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="loading">Product not found</div>;

  function handlePriceUpdate() {
    if (!newPrice || isNaN(newPrice)) return;
    updateProductPrice(product.id, newPrice);
    setNewPrice(""); 
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(product.id).then(() => {
        navigate("/products");
      });
    }
  }

  return (
    <div className="detail-page">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="meta">Category: {product.category} | Stock: {product.stock}</p>
      <p>{product.description}</p>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#27ae60", fontWeight: "bold" }}>
        Price: KES {product.price.toLocaleString()}
      </p>

      <div className="admin-box">
        <h4>Admin Controls</h4>
        <div className="form-group">
          <label>Update Price (KES)</label>
          <input
            type="number"
            placeholder="Enter new price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handlePriceUpdate}>
          Update Price
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Product
        </button>
      </div>
    </div>
  );
}
