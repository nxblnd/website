import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const jobs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/cv/jobs" }),
    schema: z.object({
        place: z.string(),
        position: z.string(),
        start: z.date(),
        end: z.date(),
    }),
});

const education = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/cv/education" }),
    schema: z.object({
        place: z.string(),
        specialization: z.string(),
        degree: z.string(),
        start: z.date(),
        end: z.date(),
    }),
});

export const collections = {
    jobs,
    education,
};
