import pug from 'pug';

const compiledFunction = pug.compileFile('auth.pug');

console.log(compiledFunction({
    name: 'timothy'
}));

console.log(compiledFunction({
    name: 'forbes'
}));

