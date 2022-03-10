Examples are adapted from https://github.com/marko-js/examples 's todo mvc app, with the webpack-express and webpack-fastify examples providing the base config for the respective adaptations of the todo mvc app

`npm install` and `npm run dev` inside all three subfolders

## Observed behaviour on Windows, per folder:

### example-markoserve (port 3000):
console output correctly shows that `myMethodx` does not exist, browser shows webpack error



### example-webpack-express (port 3001):
console output correctly shows that `myMethodx` does not exist, browser shows webpack error



### example-webpack-fastify (port 3002):
console output shows both webpack configs have compiled successfully, and browser simply displays an error 500 page, with nothing at all pointing to `myMethodx` anywhere, which makes building on the fastify example dangerous, it's basically a ticking time bomb, a typo could make it uncompilable without a way to trace it back

---

That's it.

No clue why fastify behaves differently, I had no luck in figuring it out in my limited investigations.

However, I had many more issues (on Windows, not sure if that means anything):

## Other joyous fun things:

- I have tried to make a smaller minimal repro, but the "basic" example from https://github.com/marko-js/examples has resisted all of my attempts to put a working component directory into it.
The failed attempt is on the branch "minimal".

    Doesn't work by using neither `component.js` or `component-browser.js` for various reasons, no clue why.

- On Windows, I have to repeatedly delete `node_modules/.cache` for webpack to recognize changed files. Configuring webpack to use
    ```js
    { cache: false }
    ```
    instead of
    ```js
    { cache: { type: "filesystem" } }
    ```
    fixes this, but of course this is not applicable in the `@marko/serve` example
- Neither webpack examples were equipped to properly display https://github.com/marko-js/examples 's basic example, autoprefixer had to be configured. Found it weird how much I had to dive into webpack internals just to make the basic example work in the fastify and express examples.