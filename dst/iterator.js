export function toReadableStream(iterator) {
    return new ReadableStream({
        async pull(controller) {
            const { value, done } = await iterator.next();
            if (done)
                controller.close();
            else
                controller.enqueue(value);
        }
    });
}
export async function* fromReadableStream(readableStream) {
    const reader = readableStream.getReader();
    let result;
    while (result = await reader.read()) {
        if (result.done)
            return reader.releaseLock();
        yield result.value;
    }
}
export function* toGenerator(iterator) {
    let result;
    while (result = iterator.next()) {
        if (result.done)
            return result.value;
        yield result.value;
    }
    throw new Error("Iterator yielded empty result!");
}
export async function* toAsyncGenerator(iterator) {
    let result;
    while (result = await iterator.next()) {
        if (result.done)
            return result.value;
        yield result.value;
    }
    throw new Error("Iterator yielded empty result!");
}
//# sourceMappingURL=iterator.js.map