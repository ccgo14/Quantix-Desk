import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "../pages/Products";

vi.mock("../hooks/useProducts", () => ({
  useProducts: () => ({
    products: [
      { id: "1", name: "Test Product", image: "", description: "", category: "Test", price: 1000, stock: 5 }
    ],
    isLoading: false,
    error: null,
    deleteProduct: vi.fn()
  })
}));

describe("Products Page", () => {
  it("renders the page heading", () => {
    render(<MemoryRouter><Products /></MemoryRouter>);
    expect(screen.getByText("All Products")).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(<MemoryRouter><Products /></MemoryRouter>);
    expect(screen.getByPlaceholderText("Search products by name...")).toBeInTheDocument();
  });

  it("renders product list", () => {
    render(<MemoryRouter><Products /></MemoryRouter>);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });
});
