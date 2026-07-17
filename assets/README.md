# assets/

Drop your real image files here (headshots, testimonial photos, an OG share
image, and a `favicon.ico`), then update the paths in `index.html`.

The live site currently uses warm Unsplash placeholder photos with a graceful
fallback (a soft gradient block) if an image fails to load. Search the code for
`TODO` to find every spot to swap in real assets.

Recommended sizes:

| Asset              | Size (px)   | Where it's used                  |
| ------------------ | ----------- | -------------------------------- |
| Hero headshot      | ~900 × 1100 | Hero section (`hero__photo`)     |
| About headshot     | ~800 × 900  | About section (`about__photo`)   |
| Testimonial avatar | 112 × 112   | Testimonials (square, shown 56px)|
| OG / share image   | 1200 × 630  | `og:image` meta tag              |
| Favicon            | 32 × 32     | `favicon.ico`                    |
