# Resource converter <small>(3.0.0)</small>
Resource converter is a JavaScript/TypeScript library for converting between resources such as URLs, images, blobs, generators and readable streams.

## Installation
Install via [npm](https://www.npmjs.com/package/resource-converter):
```shell
npm install resource-converter
```

## Example usage
```typescript
import * as converter from "resource-converter";

// create url from blob
await converter.dataURL.fromBlob(blob);

// load image from url
await converter.image.fromURL(url);

// create iterator from readable stream 
const response = await fetch("https://www.example.com/");
converter.asyncGenerator.fromReadableStream(response.body);

// create generator from iterator
converter.generator.fromIterator(iterator);
converter.asyncGenerator.fromAsyncIterator(asyncIterator);
```

## License
Licensed under MIT.<br/>
<br/>
All files can be used for commercial or non-commercial purposes. Do not resell. Attribution is appreciated but not due.