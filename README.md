# Resource converter <small>(1.0.0)</small>
Resource converter is a JavaScript/TypeScript library for
converting between resources such as URLs, images, blobs, readable streams and iterators.


## Installation
Install via [npm](https://www.npmjs.com/package/resource-converter):
```terminal
npm install resource-converter
```

## Example usage
```typescript
import * as converter from "resource-converter";

// create url from blob
const url = await converter.blob.toDataURL(blob)
.catch(()=>console.error("Blob is not a valid image."));

// load image from url
const image = await converter.image.fromURL(url)
.catch(()=>console.error("Failed to load image."));

// convert readable stream to iterator
const response = await fetch("https://www.example.com/");
const iterableIterator = converter.readableStream.toIterator(response.body);
```