# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server with Turbopack at http://localhost:3000
- `npm run build` - Create production build with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

This is a Next.js 15.5.5 application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Project Structure
- **`src/app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout that includes the Header component
  - `page.tsx` - Homepage component
- **`src/components/`** - Reusable React components
  - `Header.tsx` - Site header component imported by the root layout

### Key Configuration
- **TypeScript**: Strict mode enabled with path alias `@/*` mapping to `./src/*`
- **Styling**: Tailwind CSS v4 with PostCSS
- **Build**: Uses Turbopack for both development and production builds
- **Linting**: ESLint with Next.js core-web-vitals and TypeScript configurations