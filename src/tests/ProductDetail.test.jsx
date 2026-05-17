import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

vi.mock("../hooks/useProducts", () => ({
  useProducts: () => ({
    products: [
      { id: "1", name: "Detail Test", image: "", description: "desc", category: "Test", price: 5000, stock: 10 }
    ],
    isLoading: false,
    updateProductPrice: vi.fn(),
    deleteProduct: vi.fn(() => Promise.resolve())
  })
}));

describe("ProductDetail Page", () => {
  it("renders product details", () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Detail Test")).toBeInTheDocument();
  });

  it("renders admin controls", () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Admin Controls")).toBeInTheDocument();
    expect(screen.getByText("Update Price")).toBeInTheDocument();
    expect(screen.getByText("Delete Product")).toBeInTheDocument();
  });
});
