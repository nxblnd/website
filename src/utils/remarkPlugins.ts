import { execFileSync } from "node:child_process";
import type { Root } from "mdast";
import { toString } from "mdast-util-to-string";
import type { VFile } from "vfile";

function setFrontmatterTitle() {
    return function (tree: Root, file: VFile) {
        if (file.data.astro?.frontmatter?.title) {
            return;
        }

        const title = tree.children.find((node) => node.type === "heading" && node.depth === 1);
        file.data.astro!.frontmatter!.title = title ? toString(title) : "No title";
    };
}

function setFrontmatterDescription() {
    return function (tree: Root, file: VFile) {
        if (file.data.astro?.frontmatter?.description) {
            return;
        }

        const firstParagraph = tree.children.find((node) => node.type === "paragraph");
        file.data.astro!.frontmatter!.description = firstParagraph ? toString(firstParagraph) : "";
    };
}

function getGitlog(file: string) {
    try {
        const scriptArgs = ["./src/utils/build-time/gitlogToJson.py", "--file", file];
        return JSON.parse(
            execFileSync("python3", scriptArgs, {
                encoding: "utf8",
            }),
        );
    } catch (e) {
        console.error(e);
        return [];
    }
}

function setDatesFromGit() {
    return function (_: Root, file: VFile) {
        const gitlog = getGitlog(file.path).sort((a, b) => b.commitDate - a.commitDate);
        file.data.astro!.frontmatter!.gitlog = gitlog;
        if (gitlog.length > 0) {
            file.data.astro!.frontmatter!.createdDate = gitlog.at(0).commitDate;
        }
        if (gitlog.length > 1) {
            file.data.astro!.frontmatter!.updatedDate = gitlog.at(-1).commitDate;
        }
    };
}

export const remarkPlugins = [setFrontmatterTitle, setFrontmatterDescription, setDatesFromGit];
