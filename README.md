# Svantic Website

The marketing website for Svantic — Build, Orchestrate, and Govern AI Agents.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Material-UI (MUI) v6
- **Animations**: Framer Motion
- **Content**: MDX for blog posts (coming soon)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── pricing/           # Pricing page
│   ├── about/             # About us page
│   ├── features/          # Features page
│   ├── use-cases/         # Use cases overview & detail pages
│   ├── how-it-works/      # How it works page
│   ├── blog/              # Blog listing & posts
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── changelog/         # Changelog page
│   ├── security/          # Security page
│   └── legal/             # Terms & Privacy pages
├── components/            # Shared components
│   ├── header.tsx        # Navigation header
│   └── footer.tsx        # Site footer
└── theme/                 # MUI theme configuration
    ├── theme.ts          # Theme colors and typography
    └── theme_provider.tsx # Theme provider wrapper
```

## Deployment

The website is configured for Railway deployment:

```bash
# Build command
npm run build

# Start command
npm start

# Port
$PORT (defaults to 3000)
```

## Environment Variables

None required for basic operation. For production:

- `PORT` - Server port (defaults to 3000)

## Related Repositories

- **docs** - Documentation site (Redocly)
- **platform** - Core platform (Dashboard, Gateway, Mesh, SDK)

## Links

- Production: https://svantic.com
- Documentation: https://docs.svantic.com
- Dashboard: https://app.svantic.com
