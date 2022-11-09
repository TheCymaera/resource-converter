export async function fromURL(url: string) {
	const response = await fetch(url);
	return await response.blob();
}