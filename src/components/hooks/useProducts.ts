import { useQuery } from "@tanstack/react-query"

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      // Extract products array from Shopify structure
      if (result?.products?.edges) {
        return result.products.edges.map((edge: any) => edge.node) as ShopifyProduct[];
      }
      return [] as ShopifyProduct[];
    }
  });
  return { data, isLoading, error };
}