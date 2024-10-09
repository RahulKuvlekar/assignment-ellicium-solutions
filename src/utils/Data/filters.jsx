import { v4 as uuid } from "uuid";

export const SortByFilter = [
  { name: "Alphabetically (A-Z)", value: "A-Z", id: uuid() },
  { name: "Alphabetically (Z-A)", value: "Z-A", id: uuid() },
  { name: "Price (Low to High)", value: "Low to High", id: uuid() },
  { name: "Price (High to Low)", value: "High to Low", id: uuid() },
];

export const CategoryFilter = [
  { name: "Electronics", value: "electronics", id: uuid() },
  { name: "Jewelery", value: "jewelery", id: uuid() },
  { name: "Men's clothing", value: "men's clothing", id: uuid() },
  { name: "Women's clothing", value: "women's clothing", id: uuid() },
];
