// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file } from "astro/loaders";

// 3. Define your collection(s)
const otherwork = defineCollection({
  loader: file("src/content/otherwork", { parser: (text) => JSON.parse(text).images }),
  schema: ({ image }) =>
    z.object({
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
});

export const collections = { otherwork: otherwork };
