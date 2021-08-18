# Resource converter <small>(2.0.0)</small>
Resource converter is a JavaScript/TypeScript library for
converting between resources such as URLs, images, blobs, iterators and readable streams.

## Installation
Install via [npm](https://www.npmjs.com/package/resource-converter):
```shell
npm install resource-converter
```

## Example usage
```typescript
import * as converter from "resource-converter";

// create url from blob
const url = await converter.blob.toDataURL(blob)
.catch(()=>console.error("Failed to create URL."));

// load image from url
const image = await converter.image.fromURL(url)
.catch(()=>console.error("Failed to load image."));

// create iterator from readable stream 
const response = await fetch("https://www.example.com/");
const iterableIterator = converter.iterator.fromReadableStream(response.body);

// create generator from iterator
const generator = converter.iterator.toAsyncGenerator(iterableIterator);
```

## License
Licensed under MIT.<br/>
<br/>
All files can be used for commercial or non-commercial purposes. Do not resell. Attribution is appreciated but not due.