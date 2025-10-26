# Chef Claude

Chef Claude is a small React + Vite app that suggests recipes based on ingredients you have. It uses an external recipe API and lets users save favorite recipes.

## Features

- Enter ingredients and request a recipe
- AI-style recipe suggestions (via third-party API)
- Add / remove favorites (client-side)
- Simple responsive UI with Tailwind CSS

## Tech

- Vite
- React 19
- Tailwind CSS
- react-router-dom
- react-icons

## Quick start

Prerequisites

- Node.js 18+ (or compatible)
- npm (or yarn / pnpm)

Install

```bash
npm install
```

Run dev server

```bash
npm run dev
```

Build

```bash
npm run build
npm run preview
```

Lint

```bash
npm run lint
```

## Environment / API key

The app calls a third‑party recipe API. Do NOT commit your API key. Create a local env file (ignored by .gitignore) and add:

```
VITE_API_NINJAS_KEY=your_api_key_here
```

Access it in code with `import.meta.env.VITE_API_NINJAS_KEY`.

## Notes

- Commit `package.json` and the lockfile so others can install dependencies. Do not commit `node_modules` or build output (`dist`) — `.gitignore` already ignores them.
- Tailwind is a build tool and is typically installed as a devDependency. If you want to move it:
  ```bash
  npm uninstall tailwindcss @tailwindcss/vite
  npm install -D tailwindcss @tailwindcss/vite
  ```

## Development tips

- Use a `loading` boolean state around fetch requests to show a loader.
- Store favorites in a global store (Context or Zustand). Zustand removes the need for a Provider and offers lightweight selectors.
- For modals, store the selected recipe object in state and render a centered overlay when it’s non-null.

## Contributing

Open an issue or submit a PR. Keep changes focused and add brief descriptions.

## License

MIT
