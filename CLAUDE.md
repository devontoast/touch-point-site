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

## Measurement (in the script block, "measurement")
- Off until `PLAUSIBLE_SRC` (Plausible install-page script URL) and `META_PIXEL_ID` (pixel from Shopify's Facebook & Instagram app) are filled in. Empty = nothing loads, no banner.
- Meta is consent-gated: EU/EEA, UK, CH and fr-CA visitors see the consent bar first; others get it by default with "Cookie settings" in the footer to opt out.
- Site events: ViewContent, AddToCart, Lead (sign-up) to Meta; "Add to cart", "Check out", "Sign up" goals to Plausible. InitiateCheckout and Purchase come from the Shopify app on checkout, never from the site (no double counting).
- UTM tags, fbclid and external referrer are saved per session and written to the Shopify cart as attributes, so every order shows its source. UTMs are also appended to the checkout link.
- Debug: `?tpdebug` logs events to the console; `?consent=preview` shows the bar without saving a choice.

## Shopify (Touch Point store, z1cyje-zy.myshopify.com)
- Headless storefront "Touch Point site"; its public Storefront token is in `index.html`.
- Product handle `touch-point-sconce`. Prices come from Shopify markets: $350 CAD everywhere, converted to local currency outside Canada (US market rounds, no fixed USD price). Duties and import taxes outside Canada are paid by the buyer (not collected at checkout).
- Checkout runs on checkout.touchpointsconce.com (the store's primary domain). Never point the bare domain back at Shopify.
- Price, shipping, policies and order emails are changed in Shopify, not here.
