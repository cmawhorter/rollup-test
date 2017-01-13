# testing error with rollup bundle

```sh
npm install
# leaves jsonwebtoken external
npm run build-working # rollup.works.js
# uses resolve plugin
npm run build-error # rollup.error.js
```

Last line should be `{ sub: '1234567890', name: 'John Doe', admin: true }` if it works.
