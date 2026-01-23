# ezulabs Website

A modern React + Tailwind CSS website for ezulabs, showcasing AI-powered software solutions.

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite 7

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Create a new GitHub repository named `ezulabs`
2. Push your code to the `main` branch
3. Go to your repository Settings → Pages
4. Under "Build and deployment", select "GitHub Actions"
5. The site will automatically deploy on every push to `main`

### Option 2: Manual Deployment

```bash
# Install gh-pages if not already installed
npm install

# Build and deploy
npm run deploy
```

## Configuration

If your repository name is different from `ezulabs`, update the `base` path in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

For a custom domain or if deploying to the root (username.github.io), set `base: '/'`.

## Project Structure

```
ezulabs/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Clients.tsx
│   │   ├── TechStack.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## License

MIT
