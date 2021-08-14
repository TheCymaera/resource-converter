export async function fromURL(url) {
    const response = await fetch(url);
    return await response.blob();
}
export function toDataURL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.addEventListener("error", () => reject(reader.error));
        reader.readAsDataURL(blob);
    });
}
//# sourceMappingURL=blobs.js.map