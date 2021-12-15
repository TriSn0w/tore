# Say hello to `Tore!`
Tore is a package that builds off of JavaScript and other packages, making it really easy to use for web servers, discord bots, and more!

### Table of Contents:
[How do I start?](#how-do-i-start)</br>
[Examples](#examples)


# How do I start?
Just add this to your code if you want to enable everything:
```js
const tore = require('tore.js')
```
Or to add specific things (Think of it like Discord's API Intents):
```js
const { /* ANY Module you would like to add here (eg., log, prompt) */ } = require('tore.js')
```

# Examples
### Prompt
```js
const { prompt, log } = require('tore.js')

  const response = await prompt({
    type: 'number',
    name: 'value',
    message: 'Enter a number',
    validate: value => value < 0 ? `Number is less than 0.` : true
  });

  log(response);
```

### Logger
```js
const { log } = require('tore.js')
log('it works!!!')

var x = 'with variables too!'
log(x)
```

### Fetch 
```js
const { fetch, log } = require('tore.js')
fetch('https://github.com/')
    .then(res => res.text())
    .then(body => log(body));
```

### Colors in terminal
```js
const { log, colors } = require('tore.js')
log(colors.green('i should be green'))

log(colors.america('good old usa!!!'))
```

# Why Tore is easy to learn
1. It is based off of JavaScript, which is kind of easy to learn.
2. It shortens JavaScript functions, like `console.log()` into just `log()`
3. It's also adds features weekly!