import type { Root } from "mdast";
import { toString } from "mdast-util-to-string";
import type { VFile } from "vfile";

export function setFrontmatterDescription() {
    return function (tree: Root, file: VFile) {
        if (file.data.astro?.frontmatter?.description) {
            return;
        }

        const firstParagraph = tree.children.find((node) => node.type === "paragraph");
        const firstParagraphText = toString(firstParagraph);
        file.data.astro!.frontmatter!.description = firstParagraphText;
    };
}
