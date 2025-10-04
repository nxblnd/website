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

export const remarkPlugins = [setFrontmatterTitle, setFrontmatterDescription];
