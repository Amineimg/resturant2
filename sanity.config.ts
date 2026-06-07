import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { reservation } from './src/sanity/schemas/reservation'
import { menuItem } from './src/sanity/schemas/menuItem'
import { contactMessage } from './src/sanity/schemas/contactMessage'
import { category } from './src/sanity/schemas/category'

export default defineConfig({
  name: 'default',
  title: 'Restaurant App',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [reservation, menuItem, contactMessage, category],
  },
})