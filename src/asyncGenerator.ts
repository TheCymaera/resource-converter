export async function *fromReadableStream<T>(readableStream: ReadableStream<T>): AsyncGenerator<T> {
	const reader = readableStream.getReader();
	
	let result: ReadableStreamReadResult<T>;
	while (result = await reader.read()) {
		if (result.done) return reader.releaseLock();
		yield result.value;
	}
}

export async function *fromIterator<T, TReturn, TNext>(iterator: Iterator<T, TReturn, TNext>): AsyncGenerator<T, TReturn, TNext> {
	let result: IteratorResult<T, TReturn>;
	while (result = iterator.next()) {
		if (result.done) return result.value;
		yield result.value;
	}
	throw new Error("Iterator yielded empty result!");
}

export async function *fromAsyncIterator<T, TReturn, TNext>(iterator: AsyncIterator<T, TReturn, TNext>): AsyncGenerator<T, TReturn, TNext> {
	let result: IteratorResult<T, TReturn>;
	while (result = await iterator.next()) {
		if (result.done) return result.value;
		yield result.value;
	}
	throw new Error("Iterator yielded empty result!");
}