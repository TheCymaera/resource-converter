declare type AwaitableIterator<T, TReturn, TNext> = Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>;
export declare function fromIterator<T>(iterator: AwaitableIterator<T, any, any>): ReadableStream<T>;
export declare function toIterator<T>(readableStream: ReadableStream<T>): AsyncGenerator<T>;
export {};
