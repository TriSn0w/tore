# Say hello to `Tore!`
Tore is a packages that builds off of other packages(and makes them easier), making Tore really easy to use for web servers, discord bots, and more!

### Table of Contents:
[What is included?](#what-is-included)</br>
[How do I start?](#how-do-i-start)</br>
[Examples](#examples)


# What is included?
You get:
- A Discord API (discord.js)
- A user input system (prompts)
- A way to make web servers (express)
- A interface for fetching resources on websites (node-fetch)
#### **And more to come in the near future!**

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
### [Prompt](https://npmjs.com/prompts)
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

### [Fetch](https://npmjs.com/node-fetch/v/2.6.6) 
```js
const { fetch, log } = require('tore.js')
fetch('https://github.com/')
    .then(res => res.text())
    .then(body => log(body));
```

### [Colors in terminal](https://npmjs.com/colors)
```js
const { log, colors } = require('tore.js')
log(colors.green('i should be green'))

log(colors.america('good old usa!!!'))
```

### [Web Server](https://npmjs.com/express)
```js
const { startServer, addServerPage, console } = require('./index.js')

startServer(3000)

addServerPage('/', (req, res) => {
  res.send('Hello World')
})
```

### [Discord Bot]('https://npmjs.com/discord.js')
```js
const { discord } = require('./index.js')
const client = discord()


client.on('ready', () => {
  console.log('ready')
})

client.on('message', msg => {
  console.log(msg.content)
})

client.login(token)
```
[Go to the discord.js docs for documentation](https://discord.js.org)

### Classes
Classes in Tore are really easy! Instead of doing this:
```js
const test = class {
constructor () {
this.ping = 'pong'
}
}

console.log(test.ping)
```
You would do this, which would save alot of time, while doing the same action(s):
```js
const { Class, log } = require('tore.js')
const test = Class;
test.ping = 'pong'

log(test.ping)
```

**Note: OTHER MODULE EXAMPLES NOT INCLUDED HERE CAN BE EASILY FOUND IN THE OFFICIAL [node.js docs](https://nodejs.org/en/docs/)**

# Why Tore is easy to learn
1. It is based off of JavaScript, which pretty much easy to learn.
2. There are [alot of other sources of documentation](#examples) for every single module.
3. It's also adds features weekly!
