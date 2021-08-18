declare type AwaitableIterator<T, TReturn, TNext> = Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>;
export declare function toReadableStream<T>(iterator: AwaitableIterator<T, any, any>): ReadableStream<T>;
export declare function fromReadableStream<T>(readableStream: ReadableStream<T>): AsyncGenerator<T>;
export declare function toGenerator<T, TReturn, TNext>(iterator: Iterator<T, TReturn, TNext>): Generator<T, TReturn, TNext>;
export declare function toAsyncGenerator<T, TReturn, TNext>(iterator: AsyncIterator<T, TReturn, TNext>): AsyncGenerator<T, TReturn, TNext>;
export {};
