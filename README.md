<p align="center">
    <img src="./public/banner.png" alt="Repository logo" width="80" >
</p>

<h3 align="center">Next.js Github Expolorer</h3>

<p align="center">
  <a href="https://yilingtung.github.io/github-explorer/">Github Explorer</a> Next.js version 
  <br><br>
  <a href="https://nextjs-github-explorer.vercel.app/"><strong>Visit the App »</strong></a>
  <br>
</p>

## Intro

This project was bootstrapped with [Next.js](https://nextjs.org/).<br>
Similar to [Github Explorer](https://yilingtung.github.io/github-explorer/) but with more implementation of server side rendering.

## Demo

You counld also try the real app here. 👉🏻 [https://nextjs-github-explorer.vercel.app/](https://nextjs-github-explorer.vercel.app/)
<br>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

In addition to the features of [original features](https://github.com/yilingtung/github-explorer#features), here also have 👇🏻👇🏻👇🏻

### Server Side Rendering

In order to make repo page have better SEO and latest data. I use SSR to generate repo page.<br>
If you enter the repo page from the list view, it will be opened by the [modal route](https://github.com/yilingtung/github-explorer#route-as-modal) which is client side rendering. The user experience will not be interrupted by a short request time for switching ssr pages.

<p align="start">
   <img src="/images/ssr.jpg" width="600" >
</p>

### Hydrate the QueryClient 💦

Dehydrate the state from server side, prevent data refetching after enterng ssr page.

### Improving code readability with Path Aliases ✨

With path aliases you can declare aliases that map to a certain absolute path in your application.

<p align="start">
   <img src="/images/path-alias.png" width="600" >
</p>

## Build With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [react-window](https://github.com/bvaughn/react-window)
- [react-query](https://react-query.tanstack.com/)

## Code Quality

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
