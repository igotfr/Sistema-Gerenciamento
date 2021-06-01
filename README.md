# SvelteKit Tailwind Template

This is a SvelteKit starter template, it uses:

- [SvelteKit](https://kit.svelte.dev/)
- [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/)
- [Font Awesome](https://fontawesome.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Yup](https://github.com/jquense/yup)
- [AOS](https://michalsnik.github.io/aos/)

It can be uploaded to:

- [Vercel](https://vercel.com/) <br>
  And you can remove vercel and add something like netlify or node, in the [docs](https://kit.svelte.dev/docs) under adapters you can find everything you may need.

## Get started

### Starter templates

1. Open a terminal
2. Type:

```
npx degit analubarreto/sveltekit-tailwind-starter my-project
```

3. cd into folder
4. Install dependencies with
5. Run the project with

```
yarn dev
```

7. Go to http://localhost:3000/

```
yarn
```

- Run project with:

```
yarn dev
```

- Build project with:

```
yarn build
```

### Lazy Image Loading

Lazy image loading has been added, the file lazySize.js inside util is responsible for it. It is rendered inside index.html. To use it in your images follow the example below:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```

### PWA

It is enabled by default, to remove remove the files:

- manifest.json within static
- service-worker.js within the src
  and the lines from app.html in src:
- `<meta name="theme-color" content="#DAF7A6" />`
- `<link rel="apple-touch-icon" href="/images/touch-icons/logo-192.png" />`
- `<link rel="manifest" href="manifest.json" crossorigin="use-credentials" />`

!!! It only works in production

### Bootstrap

I've used the bootstrap CDN here, that means you need to use the bootstrap classes from the official docs. To customize you can use Tailwind that makes everything that much easier.

- Why haven't I used sveltestrap?
  Because I truly didn't find it straightforward to customize the elements and I really wanted to use Tailwind to do customizations and I have grown quite used to how Tailwind works.
- I want to remove bootstrap, what should I do?
  Go to app.html in the src folder and remove the link under Bootstrap CSS and the script under Bootstrap JS.
- I want to change to bootstrap 4, what should I do?
  Change the CDN links under Bootstrap CSS and Bootstrap JS to Bootstrap 4 CDN links.

### Yup

- There are example schemas inside utils folder.
- There is an example form in pages/register.svelte
  For more info check the [docs](https://github.com/jquense/yup)
  For more examples see this [article](https://codechips.me/svelte-form-validation-with-yup/)

### AOS

AOS is an animate on scroll library. It's activated by default, examples are on their [website](https://michalsnik.github.io/aos/).

- To remove AOS go to $layout and remove or comment:

```
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});
```