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
    loader: file("./src/assets/generated/gitlog.json"),
    schema: z.object({
        hash: z.string(),
        author: z.string(),
        authorEmail: z.string(),
        authorDate: z.string().datetime({ offset: true }),
        commitAuthor: z.string(),
        commitEmail: z.string(),
        commitDate: z.string().datetime({ offset: true }),
        title: z.string(),
        body: z.string().nullable(),
    }),
});

export const collections = {
    jobs,
    education,
    gitlog,
};
