import { supabase } from "@/backend/client";
export async function fetchStaff() {
  const { data } = await supabase
    .from("users")
    .select("*")
    .neq("role", "customer");
  return data;
}