export async function fromURL(url) {
    const response = await fetch(url);
    return await response.blob();
}
//# sourceMappingURL=blobs.js.map