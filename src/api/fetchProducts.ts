import { supabase } from "@/backend/client";
export async function fetchProducts(count: number) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .limit(count)
    .order("created_at", { ascending: false });;
  if (error) {
    throw error;
  }
  return data;
}

export async function fetchAllProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
  if (error) {
    throw error;
  }
  return data;
}


export async function fetchProduct(productId: number) {
  const { data, error } = await supabase.from("products").select("*").eq("product_id", productId);
  if (error) {
    throw error;
  }
  return data;
}