Rios Civic Analytics — Static Site
==================================

This is a lightweight, single‑page website you can publish **for free**.
It’s built with plain HTML/CSS/JS (no build step). You can customize text directly in `index.html`.

Quick edits to make it yours
----------------------------
1) Open `index.html` and replace:
   - Brand name: “Rios Civic Analytics”
   - Email: replace `you@example.com` with your real email (both in the visible link and in script fallback).
   - Update Services/Projects/About text as you like.
2) Contact form (optional):
   - Create a Formspree form (free tier): https://formspree.io
   - Replace the `action` in the `<form>` tag with your Form ID URL (e.g., `https://formspree.io/f/abcde123`).
   - That’s it—submissions will hit your inbox.
3) Logo:
   - Swap `assets/logo.svg` with your own if you want.

Publish for free
----------------
**Option A: GitHub Pages**
1. Create a new public repo on GitHub, e.g. `rios-civic-analytics`.
2. Upload all files from this folder.
3. In the repo, go to Settings → Pages → Build and deployment → Source = "Deploy from a branch".
4. Select branch `main` and folder `/ (root)`. Save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

**Option B: Netlify Drop**
1. Visit https://app.netlify.com/drop
2. Drag the folder onto the page.
3. Netlify will give you a live URL instantly (you can customize the subdomain).

Customize colors & style
------------------------
- Colors are CSS variables at the top of `styles.css` (primary, background, etc.).
- A basic dark mode toggle is included (stored in localStorage).
- The layout is responsive down to mobile screens.

Need additional pages, blog, or a CMS?
--------------------------------------
- The site is intentionally simple so it can live on free hosting.
- You can duplicate the pattern for `about.html`, `work.html`, etc., and adjust the nav links.
- For a blog or CMS, consider pairing this with a free headless CMS (Netlify CMS) or WordPress.

Enjoy! ✨
