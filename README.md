# javascript-javastyle-i18n
Resolves Java Style i18n Strings inside javascript

Current published version: 1.0.0

Install it throught npm and use this way:
```
npm install --save javascript-javastyle-i18n
```

Usage:
```
const resolver = require('javascript-javastyle-i18n');

console.log(resolver("Hello {0}!", ["World"])); // Outputs: "Hello World!"
```
