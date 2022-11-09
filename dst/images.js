export function fromURL(url) {
    return new Promise((resolve, reject) => {
        const image = new Image;
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (event) => reject(event.error));
        image.src = url;
    });
}
//# sourceMappingURL=images.js.map