type AwaitableIterator<T, TReturn, TNext> = 
	Iterator<T, TReturn, TNext>|
	AsyncIterator<T, TReturn, TNext>;

export function fromIterator<T>(iterator: AwaitableIterator<T, any, any>): ReadableStream<T> {
	return new ReadableStream<T>({
		async pull(controller: ReadableStreamController<T>) {
			const { value, done } = await iterator.next();
			if (done) controller.close();
			else controller.enqueue(value);
		}
	});
}

export async function *toIterator<T>(readableStream: ReadableStream<T>): AsyncGenerator<T> {
	const reader = readableStream.getReader();
	
	let result: ReadableStreamDefaultReadResult<T>;
	while (result = await reader.read()) {
		if (result.done) return reader.releaseLock();
		yield result.value;
	}
}
