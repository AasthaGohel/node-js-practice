// Path -> provides a way of working with directories and file paths
// Use it instead of string concatenation so paths work correctly on both Windows and Unix, and so segments like .. and . are normalized and safe to use.
// helps you work with file and directory paths in a safe, consistent and platform-independent way

// Why do we use the path module?
// You can use it to:
// - Join paths to create a complete file path.
// - Extract file names from a path.
// - Get file extensions, such as .js or .json.
// - Resolve relative paths into absolute paths.
// - Normalize paths by removing unnecessary . and .. segments.
// - Get directory names from file paths.

// path.join() -> join a seq of path segments using platform-specific seperator and normalize the result
// const pathToDir = path.join('/home', 'js', 'dist', 'app.js');
// console.log(pathToDir);

// path.resolve() -> resolve a seq of paths into an absolute path
import path from 'node:path'
const absPath = path.resolve('html', 'index.html');
console.log(absPath);

// path.dirname()-> get dir name of path
const dir = path.dirname('/public/page.html');
console.log(dir);

// path.basename() -> get last portion of path, optionally removing an extension
console.log(path.basename('public/page.html')); // page.html
console.log(path.basename('public/page.html', '.html')); // page

// path.extname()
// get the file extension
console.log(path.extname('index.html')); // .html
console.log(path.extname('app.js')); // .js

// path.format(pathObj) ->	Build a path string from an object with dir, root, base, name, ext.
//path.isAbsolute(path)	-> Returns true if the path is absolute (e.g. /foo or C:\foo on Windows).
// path.parse(path)	-> Returns an object with root, dir, base, name, ext for the given path.
// path.normalize(path) ->	Normalizes slashes and resolves .. and . segments.
// path.relative(from, to) ->	Returns the relative path from from to to.

// CommonJs
// __filename - absolute path of current file
// __dirname - directory containing current file

// ES Modules
// do not expose __dirname or __filename
// use import.meta.url -> holds the file URL of current module

import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const configPath = path.join(__dirname, 'config.json');