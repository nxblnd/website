import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const jobs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/cv/jobs" }),
    schema: z.object({
        place: z.string(),
        position: z.string(),
        start: z.string(),
        end: z.string(),
        stack: z.string(),
    }),
});
const education = defineCollection({});

export const collections = {
    jobs,
    education,
};
