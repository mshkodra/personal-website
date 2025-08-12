# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Next.js 15.4.4, React 19, and Tailwind CSS 4. It's a simple portfolio site with three main pages: Home, About, and Bookshelf.

## Development Commands

The project uses pnpm as the package manager (as noted in README.md):

```bash
# Install dependencies
pnpm i

# Development server
pnpm dev

# Build for production
next build

# Start production server
next start

# Lint code
next lint
```

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with PostCSS
- **TypeScript**: Fully typed codebase
- **Layout Structure**: 
  - Root layout (`src/app/layout.tsx`) provides consistent page structure with Header component
  - Content is constrained to `max-w-2xl` container with consistent padding
  - Header navigation uses client-side state management for current page tracking

## Key Components

- **Header** (`src/app/header.tsx`): Client component with navigation using enum-based page tracking
- **Pages**: Home (`page.tsx`), About (`about/page.tsx`), Bookshelf (`bookshelf/page.tsx`)
- **Styling**: Blue links with hover underlines, consistent spacing patterns

## Code Patterns

- Uses Next.js Link component for navigation with custom styling
- Consistent class naming with Tailwind utilities
- External links include `target="_blank" rel="noopener noreferrer"` for security
- Grid layouts for structured content (bookshelf table)
- Client components marked with "use client" directive when needed for interactivity