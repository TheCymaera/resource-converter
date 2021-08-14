export function fromURL(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject)=>{
		const image = new Image;
		image.addEventListener("load",()=>resolve(image));
		image.addEventListener("error",(event)=>reject(event.error));
		image.src = url;
	});
}

export function toURL(image: HTMLImageElement): string {
	return image.src;
}