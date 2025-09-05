# Surge Portfolio

Welcome to **Surge**, your go-to **GFX Designer** portfolio website. This project is inspired by MobasticFX, designed to showcase your GFX work, shop products, and connect your social links seamlessly.

## Features

- **Hero Section:** "Hey Im Surge" with dynamic environment variables.
- **GFX Projects/Work:** Display your best GFX projects with placeholders.
- **Shop Section:** Showcase digital products or packs for sale.
- **Stats:** Display views, experience, and number of projects.
- **About Section:** Add your biography and personal description.
- **Footer:** Social media links with icons.
- **Dark Theme:** Black background with stars and blue vignette.
- **Responsive:** Works across desktop, tablet, and mobile.
- **Animated:** Smooth animations with Framer Motion.

## Getting Started

### Prerequisites

- Node.js v18+ and npm installed.
- Vercel account for deployment.

### Installation

1. Clone or download this repository.
2. Install dependencies:
```bash
npm install
```
3. Create a `.env.local` file at the root:
```env
NEXT_PUBLIC_SITE_NAME=Surge
NEXT_PUBLIC_HERO_TEXT=Hey Im
NEXT_PUBLIC_SITE_DESCRIPTION=GFX Designer
NEXT_PUBLIC_TWITTER_URL=#
NEXT_PUBLIC_INSTAGRAM_URL=#
NEXT_PUBLIC_YOUTUBE_URL=#
NEXT_PUBLIC_DISCORD_URL=#
```
4. Run the development server:
```bash
npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Deployment

1. Go to [Vercel](https://vercel.com/new) and sign in.
2. Drag & drop the project folder.
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Click Deploy.

Your portfolio will now be live with all the features ready to customize.

## Customization

- Update the `.env.local` for your personal name, hero text, and social links.
- Replace placeholder images in `pages/index.js` with your real GFX work.
- Adjust colors, fonts, and animations in Tailwind CSS config.

## License

This project is free to use and modify for personal GFX portfolio purposes.
