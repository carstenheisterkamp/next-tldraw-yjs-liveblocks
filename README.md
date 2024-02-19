# NEXT-TLDRAW-YJS-LIVEBLOCKS 
Collaborative Drawing app to get myself into collaborative realtime app development.
Heavily inspired by https://github.com/CTNicholas/wip-liveblocks-tldraw

## Getting Started

Checkout this repository and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## TLDRAW

tldraw is a library for creating infinite canvas experiences in React https://github.com/tldraw/tldraw

## YJS

Shared data types for building collaborative software
https://github.com/yjs/yjs

## LIVEBLOCKS

Liveblocks is a real-time collaboration infrastructure for developers.
https://github.com/liveblocks

Create an .env.local file in the root directory of your codebase.
Create an account on liveblocks.io
Create a project
Copy your public key and secret key from the projects API Keys menu
Add the keys to the environment variable in the .env.local file as follows:  

`LIVEBLOCKS_PUBLIC_KEY="pk-your public key"`
`LIVEBLOCKS_SECRET_KEY="sk-your secret key"`


## NEXTJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
