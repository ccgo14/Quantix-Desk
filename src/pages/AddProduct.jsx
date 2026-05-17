import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export default function AddProduct() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    price: "",
    stock: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // make sure price and stock are numbers before sending
    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock)
    };

    addProduct(productData).then(() => {
      navigate("/products"); // go to products page after adding
    });
  }

  return (
    <div className="form-page">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} placeholder="https://..." />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" required />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} placeholder="Electronics, Footwear, etc" required />
        </div>

        <div className="form-group">
          <label>Price (KES)</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Stock Quantity</label>
          <input name="stock" type="number" value={form.stock} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
}
