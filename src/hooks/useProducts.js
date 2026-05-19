import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/products";


export function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    console.log("Fetching products from local DB..."); 
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("something went wrong");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        console.log("loaded", data.length, "products");
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  
  function addProduct(product) {
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
        return newProduct;
      });
  }

  
  function updateProductPrice(id, newPrice) {
    return fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setProducts((prev) =>
          prev.map((p) => (p.id === id ? updated : p))
        );
        return updated;
      });
  }

  
  function deleteProduct(id) {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  }

  return { products, isLoading, error, addProduct, updateProductPrice, deleteProduct };
}
