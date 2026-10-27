const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

console.log(`Starting in ${env} mode on port ${port}`)
console.log(process.version);
console.log(process.platform)
console.log(process.argv)
console.log(process.cwd())