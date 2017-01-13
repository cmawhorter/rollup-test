# testing error with rollup bundle

```sh
npm install
# leaves jsonwebtoken external
npm run build-working # rollup.works.js
# uses resolve plugin
npm run build-error # rollup.error.js
```

Last line should be `{ sub: '1234567890', name: 'John Doe', admin: true }` if it works.

## error

```
TypeError: The super constructor to "inherits" must not be null or undefined
    at Object.exports.inherits (util.js:951:11)
    at Object.<anonymous> (........./rollup-test/dest.js:7158:8)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Module.require (module.js:468:17)
    at require (internal/module.js:20:19)
    at [eval]:1:13
```

## workaround

See `workaround` branch.
