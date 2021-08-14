export function fromIterator(iterator) {
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
export async function* toIterator(readableStream) {
    const reader = readableStream.getReader();
    let result;
    while (result = await reader.read()) {
        if (result.done)
            return reader.releaseLock();
        yield result.value;
    }
}
//# sourceMappingURL=readableStreams.js.map