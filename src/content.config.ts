import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

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

const gitlog = defineCollection({
    loader: file("./src/assets/gitlog.json"),
    schema: z.object({
        commit: z.string(),
        author: z.string(),
        author_email: z.string(),
        date: z.string(),
        commit_by: z.string(),
        commit_by_email: z.string(),
        commit_by_date: z.string(),
        message: z.string(),
    }),
});

export const collections = {
    jobs,
    education,
    gitlog,
};
