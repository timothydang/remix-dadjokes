# Dad jokes reimagined in Remix

A classic dad jokes website built from Remix's [Jokes App Tutorial](https://remix.run/docs/en/main/tutorials/jokes). However, there are a few changes that were introduced to tailor it to my workflow.

- [x] Javascript instead of TS
- [x] ESLint / Pretter for linting & formatting
- [x] [Prisma](https://www.prisma.io/docs) ORM with a SQLite database
- [x] [Zod](https://github.com/colinhacks/zod) for form validation with [Remix Validated Form](https://www.remix-validated-form.io/)
- [ ] [Clerk]() for user authentication & session management
- [ ] [Panda-css] for CSS-in-JS
- [ ] [Vercel] for deployment

See [Remix Docs](https://remix.run/docs) for the official documentation from Remix team.

## Development

From your terminal, run

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
