const foo = content => console.log(content);
const bar = (content) => foo(content + Math.random())

foo('hello')

console.log(bar('rollup'));