# Touch Point site: working notes for Claude

This repo is the live site at https://touchpointsconce.com. Vercel deploys every push to `main` within about a minute.

## How changes ship
- Small edits (copy, a photo, a link): commit to `main`, then open the live site and check the price loads and Add to cart works.
- Bigger changes (layout, new sections): push a branch first. Vercel builds a preview link; ship to `main` only after Devansh approves it.
- After each push, copy the changed files into his Google Drive folder "office of Devansh Shah/1_ADMIN/Touch Point site" when that folder is connected.
- Rollback: Vercel → Deployments → promote the previous one, or revert the commit.

## Structure
- `index.html`: the whole page (styles and script inline). Design system notes are in the comment at the top of the `<style>` block.
- `img/`: product and in-situ photos. `media/`: hero films (`film.mp4` 16:9, `film-mobile.mp4` 9:16) and posters.

## Shopify (Touch Point store, z1cyje-zy.myshopify.com)
- Headless storefront "Touch Point site"; its public Storefront token is in `index.html`.
- Product handle `touch-point-sconce`. Prices come from Shopify markets: Canada $300 CAD, US US$349 fixed, International local currency.
- Checkout runs on checkout.touchpointsconce.com (the store's primary domain). Never point the bare domain back at Shopify.
- Price, shipping, policies and order emails are changed in Shopify, not here.
