export function fromBlob(blob: Blob): Promise<string> {
	return new Promise((resolve,reject)=>{
		const reader = new FileReader();
		reader.addEventListener("load", ()=>resolve(reader.result as string), false);
		reader.addEventListener("error", ()=>reject(reader.error));
		reader.readAsDataURL(blob);
	});
}