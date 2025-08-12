export default function download(path: string, filename?: string): void {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename ?? "";

    document.body.appendChild(link);
    link.click();
    link.remove();
}
