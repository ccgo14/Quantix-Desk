import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useProducts } from "../hooks/useProducts";

describe("useProducts hook", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: "1", name: "Mock Product", price: 1000, stock: 5 }])
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches products on mount", async () => {
    const { result } = renderHook(() => useProducts());
    await waitFor(() => expect(result.current.products.length).toBe(1));
    expect(result.current.products[0].name).toBe("Mock Product");
  });

  it("sets loading to false after fetch", async () => {
    const { result } = renderHook(() => useProducts());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  it("handles fetch errors", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("network error")));
    const { result } = renderHook(() => useProducts());
    await waitFor(() => expect(result.current.error).toBe("network error"));
  });
});
