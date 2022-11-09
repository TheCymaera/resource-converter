export function *fromIterator<T, TReturn, TNext>(iterator: Iterator<T, TReturn, TNext>): Generator<T, TReturn, TNext> {
	let result: IteratorResult<T, TReturn>;
	while (result = iterator.next()) {
		if (result.done) return result.value;
		yield result.value;
	}
	throw new Error("Iterator yielded empty result!");
}