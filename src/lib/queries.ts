// GROQ Queries for Sanity CMS

// Fetch all categories ordered
export const categoriesQuery = `*[_type == "category"] | order(order asc) {
  _id,
  name,
  order
}`;

// Fetch all menu items with category reference resolved
export const menuItemsQuery = `*[_type == "menuItem"] | order(category->order asc, _createdAt asc) {
  _id,
  title,
  description,
  price,
  image,
  "category": category->name
}`;

// Fetch menu items by category
export const menuItemsByCategoryQuery = `*[_type == "menuItem" && category->name == $category] | order(_createdAt asc) {
  _id,
  title,
  description,
  price,
  image,
  "category": category->name
}`;

// Fetch featured/specialty items (first 4)
export const featuredItemsQuery = `*[_type == "menuItem"][0...4] {
  _id,
  title,
  description,
  price,
  image,
  "category": category->name
}`;

// Fetch all gallery images
export const galleryImagesQuery = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  title,
  image,
  category
}`;

// Fetch gallery images by category
export const galleryByCategoryQuery = `*[_type == "galleryImage" && category == $category] | order(order asc) {
  _id,
  title,
  image,
  category
}`;
