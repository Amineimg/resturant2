import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id_here';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

// Read client (public, no token needed)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Write client (server-side only, needs token)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getMenuItems() {
  return client.fetch(`*[_type == "menuItem"] | order(_createdAt asc) {
    _id,
    title,
    description,
    price,
    category->{name},
    "imageUrl": image.asset->url
  }`)
}
export async function getCategories() {
  return client.fetch(`*[_type == "category"] | order(order asc) {
    _id,
    name
  }`)
}