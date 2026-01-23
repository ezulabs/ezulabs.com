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

## Custom Domain Setup (GoDaddy DNS)

To use your custom domain `ezulabs.com` with GitHub Pages:

### Step 1: Configure GitHub Pages

1. Go to your GitHub repository → **Settings** → **Pages**
2. Under "Custom domain", enter `ezulabs.com`
3. Check "Enforce HTTPS" (this will be available after DNS propagates)
4. The CNAME file is already included in the repository

### Step 2: Configure GoDaddy DNS

1. Log in to your [GoDaddy account](https://www.godaddy.com)
2. Go to **My Products** → **DNS** (or **Domains** → **Manage DNS**)
3. Find your domain `ezulabs.com` and click **DNS** or **Manage**

#### For Apex Domain (ezulabs.com):

Add or update these **A records** (delete any existing A records first):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

#### For WWW Subdomain (www.ezulabs.com):

Add a **CNAME record**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | ezulabs.github.io | 600 |

**Note:** These are GitHub Pages' IP addresses. They may change, so check [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) for the latest IPs.

### Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check propagation status using tools like [whatsmydns.net](https://www.whatsmydns.net)
- Once propagated, GitHub will automatically enable HTTPS for your domain

### Step 4: Verify Setup

1. After DNS propagates, visit `https://ezulabs.com` (it may take a few minutes)
2. GitHub will automatically provision an SSL certificate
3. Ensure "Enforce HTTPS" is checked in GitHub Pages settings

### Troubleshooting

- **Domain not resolving?** Wait 24-48 hours for DNS propagation
- **HTTPS not working?** It can take up to 24 hours after DNS propagation for GitHub to provision the certificate
- **CNAME file issues?** Make sure `public/CNAME` contains only `ezulabs.com` (no trailing slash or www)

## PostHog Analytics Setup

This project uses [PostHog](https://posthog.com) for analytics. Follow these steps to configure it:

### Step 1: Get Your PostHog Credentials

1. Sign up for a free account at [PostHog](https://posthog.com)
2. Create a new project
3. Go to **Settings** → **Project** → **Project API Key**
4. Copy your API key
5. Note your PostHog host URL:
   - US: `https://us.i.posthog.com` (default)
   - EU: `https://eu.i.posthog.com`

### Step 2: Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your PostHog credentials:
   ```env
   VITE_PUBLIC_POSTHOG_KEY=your_actual_api_key_here
   VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### Step 3: GitHub Pages Deployment

For GitHub Pages, environment variables must be set as GitHub Secrets:

1. Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secrets:
   - **Name:** `VITE_PUBLIC_POSTHOG_KEY`
     **Value:** Your PostHog API key
   - **Name:** `VITE_PUBLIC_POSTHOG_HOST`
     **Value:** Your PostHog host URL (e.g., `https://us.i.posthog.com`)

4. The GitHub Actions workflow will automatically use these secrets during the build process

**Note:** Vite replaces `import.meta.env.VITE_*` variables at build time, so they're baked into the static files. This is why we use GitHub Secrets for the build step.

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
