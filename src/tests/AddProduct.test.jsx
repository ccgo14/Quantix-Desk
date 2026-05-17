import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct";

vi.mock("../hooks/useProducts", () => ({
  useProducts: () => ({
    addProduct: vi.fn(() => Promise.resolve())
  })
}));

describe("AddProduct Page", () => {
  it("renders the form heading", () => {
    render(<MemoryRouter><AddProduct /></MemoryRouter>);
    expect(screen.getByText("Add New Product")).toBeInTheDocument();
  });

  it("renders all form fields", () => {
    render(<MemoryRouter><AddProduct /></MemoryRouter>);
    expect(screen.getByLabelText("Product Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Price (KES)")).toBeInTheDocument();
    expect(screen.getByLabelText("Stock Quantity")).toBeInTheDocument();
  });

  it("has a submit button", () => {
    render(<MemoryRouter><AddProduct /></MemoryRouter>);
    expect(screen.getByText("Add Product")).toBeInTheDocument();
  });
});
