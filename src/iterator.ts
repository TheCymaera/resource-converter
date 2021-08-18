type AwaitableIterator<T, TReturn, TNext> = 
	Iterator<T, TReturn, TNext>|
	AsyncIterator<T, TReturn, TNext>;


export function toReadableStream<T>(iterator: AwaitableIterator<T, any, any>): ReadableStream<T> {
	return new ReadableStream<T>({
		async pull(controller: ReadableStreamController<T>) {
			const { value, done } = await iterator.next();
			if (done) controller.close();
			else controller.enqueue(value);
		}
	});
}

export async function *fromReadableStream<T>(readableStream: ReadableStream<T>): AsyncGenerator<T> {
	const reader = readableStream.getReader();
	
	let result: ReadableStreamDefaultReadResult<T>;
	while (result = await reader.read()) {
		if (result.done) return reader.releaseLock();
		yield result.value;
	}
}

export function *toGenerator<T, TReturn, TNext>(iterator: Iterator<T, TReturn, TNext>): Generator<T, TReturn, TNext> {
	let result: IteratorResult<T, TReturn>;
	while (result = iterator.next()) {
		if (result.done) return result.value;
		yield result.value;
	}
	throw new Error("Iterator yielded empty result!");
}

export async function *toAsyncGenerator<T, TReturn, TNext>(iterator: AsyncIterator<T, TReturn, TNext>): AsyncGenerator<T, TReturn, TNext> {
	let result: IteratorResult<T, TReturn>;
	while (result = await iterator.next()) {
		if (result.done) return result.value;
		yield result.value;
	}
	throw new Error("Iterator yielded empty result!");
}