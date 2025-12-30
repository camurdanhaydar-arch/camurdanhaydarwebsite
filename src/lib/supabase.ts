import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  title: string;
  category: "bireysel" | "ticari" | "multisplit" | "hava-temizleyici";
  image_url: string;
  description: string;
  technical_specs: string | Record<string, unknown>;
  is_featured: boolean;
  created_at: string;
}

export interface PressNews {
  id: string;
  title: string;
  image_url: string;
  summary: string;
  link?: string;
}

export async function getProducts(category?: string) {
  let query = supabase.from("products").select("*").order("created_at", { ascending: false });
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) return [];
  return data as Product[];
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase.from("products").select("*").eq("is_featured", true);
  if (error) return [];
  return data as Product[];
}

export async function getPressNews() {
  const { data, error } = await supabase.from("press_news").select("*");
  if (error) return [];
  return data as PressNews[];
}
