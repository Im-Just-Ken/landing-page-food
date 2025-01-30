Features

This project is a Vue.js-based web application incorporating modern frontend development techniques to enhance performance, interactivity, and responsiveness.

1. Intersection Observer & Lazy Loading

Efficient loading of components using Vue's defineAsyncComponent.

Intersection Observer API is used to load components when they enter the viewport, reducing initial page load time.

Lazy loading images and components to improve performance and user experience.

2. Animations

Smooth motion effects using Tailwind CSS animations.

Floating effects for images (slow up & down animation) with easing.

Fade-in & transition effects when elements enter the viewport.

3. Responsiveness

Fully responsive UI using Tailwind CSS grid & flex utilities.

Masonry layout for testimonials adapts to different screen sizes.

Mobile-friendly two-column layout for smaller screens.

4. Interactivity

Modal interactions for content expansion using v-if and v-show.

Dynamic state management using Pinia for component state handling.

Buttons and UI elements trigger actions smoothly with animations.

5. Dynamic Data Binding (Local & API Calls)

Local state management with Pinia for reactive components.

API data fetching using Axios from Testimonial API.

Displaying testimonials dynamically in a responsive masonry layout.

# landing-page

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
