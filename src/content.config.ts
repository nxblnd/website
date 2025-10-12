import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const jobs = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cv/jobs" }),
    schema: z.object({
        place: z.string(),
        position: z.string(),
        start: z.date(),
        end: z.date(),
    }),
});

const education = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cv/education" }),
    schema: z.object({
        place: z.string(),
        specialization: z.string(),
        degree: z.string(),
        start: z.date(),
        end: z.date(),
    }),
});

const gitlogSchema = z.array(
    z.object({
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
);

const gitlog = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/assets/generated/gitlog" }),
    schema: gitlogSchema,
});

const posts = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string().default("No title"),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        gitlog: gitlogSchema.default([]),
        createdDate: z.date().optional(),
        updatedDate: z.date().optional(),
    }),
});

export const collections = {
    jobs,
    education,
    gitlog,
    posts,
};
