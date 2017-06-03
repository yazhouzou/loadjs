## loadJS

A function for loading JS files

<div align="center">
	<a href="https://npmjs.com/package/yazhouzou-loadjs">
		<img src="https://img.shields.io/npm/dm/yazhouzou-loadjs.svg">
	</a>
</div>

## Install

`npm install yazhouzou/loadJS --save`

## Usage

1. Load a js file

```javascript
import loadJS from 'loadJS'

loadJS(
  '/path/to/file.js',
  function () { /* file.js loaded */ },
  function () { /* file.js failed */ }
);
```
