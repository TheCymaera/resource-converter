type AwaitableIterator<T, TReturn, TNext> = 
	Iterator<T, TReturn, TNext>|
	AsyncIterator<T, TReturn, TNext>;

export function fromAsyncIterator<T>(iterator: AwaitableIterator<T, any, any>): ReadableStream<T> {
	return new ReadableStream<T>({
		async pull(controller) {
			const { value, done } = await iterator.next();
			if (done) controller.close();
			else controller.enqueue(value);
		}
	});
}