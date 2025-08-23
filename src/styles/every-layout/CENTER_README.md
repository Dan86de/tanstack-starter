# Center Layout Utility

A comprehensive Tailwind CSS utility for centering content horizontally with optional maximum width constraints. Based on the Every Layout center pattern, this utility provides a flexible way to create readable, well-proportioned layouts that adapt to different screen sizes.

## Overview

The center utility creates horizontally centered content with an optional maximum width, perfect for maintaining optimal reading line lengths, containing page sections, and creating balanced layouts. It uses logical properties for internationalization support and content-box sizing for precise control.

## Basic Usage

```html
<div class="center">
  <h1>Centered Content</h1>
  <p>This content is centered with a default max-width of 65ch for optimal readability.</p>
</div>
```

## Utility Classes

### Container Size Classes

Pre-defined container sizes that match Tailwind's container scale:

- `center-3xs` - Max width: 16rem (256px)
- `center-2xs` - Max width: 18rem (288px)
- `center-xs` - Max width: 20rem (320px)
- `center-sm` - Max width: 24rem (384px)
- `center-md` - Max width: 28rem (448px)
- `center-lg` - Max width: 32rem (512px)
- `center-xl` - Max width: 36rem (576px)
- `center-2xl` - Max width: 42rem (672px)
- `center-3xl` - Max width: 48rem (768px)
- `center-4xl` - Max width: 56rem (896px)
- `center-5xl` - Max width: 64rem (1024px)
- `center-6xl` - Max width: 72rem (1152px)
- `center-7xl` - Max width: 80rem (1280px)

### Special Width Classes

- `center` - Default with 65ch max-width (optimal reading measure)
- `center-full` - 100% max-width
- `center-none` - No max-width constraint
- `center-*` - Custom spacing value (uses Tailwind spacing scale)

### Additional Modifiers

- `center-text` - Centers text alignment within the container
- `center-intrinsic` - Centers children based on their intrinsic width
- `center-gutter-*` - Adds horizontal padding (gutters) to the container

## CSS Variables

The center utility uses CSS custom properties that can be overridden:

```css
:root {
  --measure: 65ch; /* Default max-width for optimal reading */
}
```

You can override this in your component:

```html
<div class="center" style="--measure: 80ch;">
  <p>Content with a custom maximum width</p>
</div>
```

## Examples

### Basic Centered Content

```html
<article class="center">
  <h1>Article Title</h1>
  <p>This article text is centered and constrained to an optimal reading width.</p>
  <p>Multiple paragraphs maintain consistent width for comfortable reading.</p>
</article>
```

### Wide Container for Dashboard

```html
<div class="center-6xl">
  <header>Dashboard</header>
  <div class="grid grid-cols-3 gap-4">
    <!-- Dashboard widgets -->
  </div>
</div>
```

### Centered with Gutters

```html
<main class="center-lg center-gutter-4">
  <h1>Page Title</h1>
  <p>Content with padding on the sides to prevent edge touching on small screens.</p>
</main>
```

### Intrinsically Centered Card

```html
<div class="center-intrinsic">
  <div class="box-4">
    <h2>Card Title</h2>
    <p>This card is centered based on its natural width.</p>
    <button>Action</button>
  </div>
</div>
```

### Centered Text Block

```html
<section class="center-md center-text">
  <h2>Centered Heading</h2>
  <p>This text is both container-centered and text-aligned center.</p>
  <button>Centered Button</button>
</section>
```

### Full Width with Gutters

```html
<div class="center-full center-gutter-8">
  <p>Full width content with generous padding on the sides.</p>
</div>
```

### Narrow Content Column

```html
<div class="center-sm">
  <form>
    <label>Email</label>
    <input type="email" />
    <button>Subscribe</button>
  </form>
</div>
```

## How It Works

The center utility uses CSS properties with the following key features:

1. **Auto Margins**: Uses `margin-inline: auto` for horizontal centering
2. **Content Box Sizing**: Uses `content-box` to ensure padding doesn't affect max-width
3. **Logical Properties**: Uses `max-inline-size` and `margin-inline` for RTL support
4. **Flexible Sizing**: Supports both character-based (ch) and pixel-based constraints
5. **Display Block**: Ensures the element behaves as a block-level container

## Implementation Details

The center utilities use Tailwind v4's `@utility` syntax:

```css
@utility center {
  display: block;
  box-sizing: content-box;
  margin-inline: auto;
  max-inline-size: var(--measure);
}

@utility center-* {
  display: block;
  box-sizing: content-box;
  margin-inline: auto;
  max-inline-size: --spacing(--value(integer));
}
```

## Combining with Other Utilities

### With Stack

```html
<div class="center-lg stack-v-6">
  <h1>Stacked and Centered</h1>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

### With Box

```html
<div class="center-md">
  <div class="box-6">
    <h2>Centered Box</h2>
    <p>Content within a bordered, centered container.</p>
  </div>
</div>
```

### With Sidebar

```html
<div class="center-6xl">
  <div class="sidebar-left sidebar-w-sm">
    <nav>Navigation</nav>
    <main>Main content</main>
  </div>
</div>
```

## Use Cases

### Article Layout

```html
<article class="center center-gutter-4 stack-v-4">
  <header>
    <h1>Article Title</h1>
    <p class="text-gray-600">Published on January 1, 2024</p>
  </header>
  <div>
    <p>Article content with optimal reading width...</p>
  </div>
  <footer>
    <p>Written by Author Name</p>
  </footer>
</article>
```

### Landing Page Hero

```html
<section class="center-4xl center-text">
  <h1 class="text-6xl">Welcome to Our Product</h1>
  <p class="text-xl">The perfect solution for your needs</p>
  <div class="cluster-4">
    <button>Get Started</button>
    <button>Learn More</button>
  </div>
</section>
```

### Form Container

```html
<div class="center-sm center-gutter-4">
  <form class="stack-v-4">
    <h2>Sign Up</h2>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Create Account</button>
  </form>
</div>
```

### Documentation Layout

```html
<div class="center-3xl center-gutter-6">
  <nav>Table of Contents</nav>
  <main class="stack-v-8">
    <section>
      <h2>Getting Started</h2>
      <p>Documentation content...</p>
    </section>
    <section>
      <h2>API Reference</h2>
      <p>More documentation...</p>
    </section>
  </main>
</div>
```

## Responsive Considerations

The center utility is inherently responsive:

- Content automatically fills available space up to the max-width
- Gutters provide padding on small screens
- No media queries needed for basic functionality
- Combines well with Tailwind's responsive modifiers

```html
<!-- Different max-widths at different breakpoints -->
<div class="center-sm md:center-lg xl:center-4xl">
  <p>Responsive centered content</p>
</div>
```

## Browser Support

This utility uses modern CSS features:

- CSS Custom Properties (CSS Variables)
- Logical properties (`margin-inline`, `max-inline-size`)
- `content-box` sizing
- Flexbox (for `center-intrinsic`)

## Tips and Best Practices

1. **Choose appropriate widths**: Use `center` (65ch) for body text, wider for dashboards
2. **Always add gutters**: Use `center-gutter-4` or similar for mobile-friendly layouts
3. **Consider reading comfort**: Limit line length to 45-75 characters for body text
4. **Layer containers**: Nest center utilities for complex layouts
5. **Use semantic HTML**: Apply center to appropriate container elements
6. **Test on mobile**: Ensure content doesn't touch viewport edges
7. **Combine with spacing**: Use with stack or cluster for complete layouts

## Accessibility Considerations

- The center utility doesn't affect document structure or screen reader navigation
- Maintains natural reading order
- Works well with keyboard navigation
- Supports RTL languages through logical properties

## Performance Notes

- Lightweight CSS with no JavaScript dependencies
- No complex calculations or reflows
- Efficient browser rendering
- Minimal specificity conflicts

## Migration from Traditional Approaches

If migrating from traditional CSS patterns:

| Traditional Pattern | Center Utility Equivalent |
| ------------------- | ------------------------- |
| `.container`        | `center-6xl`              |
| `.wrapper`          | `center-5xl`              |
| `.content`          | `center`                  |
| `max-width + margin: 0 auto` | `center-*`     |
| `.narrow`           | `center-sm`               |
| `.wide`             | `center-7xl`              |

## Common Patterns

### Page Layout

```html
<body>
  <header class="center-6xl center-gutter-4">
    <!-- Header content -->
  </header>
  <main class="center-4xl center-gutter-4">
    <!-- Main content -->
  </main>
  <footer class="center-6xl center-gutter-4">
    <!-- Footer content -->
  </footer>
</body>
```

### Card Grid Container

```html
<div class="center-6xl center-gutter-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Card components -->
  </div>
</div>
```

## Troubleshooting

### Content Not Centering

- Ensure the parent container has sufficient width
- Check for conflicting margin styles
- Verify the element is block-level (`display: block`)

### Max-width Not Working

- Check for overriding max-width styles
- Ensure you're using valid size classes
- Verify CSS file is properly imported

### Gutters Not Showing

- Confirm using `center-gutter-*` with valid spacing value
- Check for conflicting padding styles
- Ensure content-box sizing is maintained

## Quick Reference

| Class              | Max Width | Description                        |
| ------------------ | --------- | ---------------------------------- |
| `center`           | 65ch      | Default, optimal for reading      |
| `center-sm`        | 24rem     | Narrow content                    |
| `center-md`        | 28rem     | Small container                   |
| `center-lg`        | 32rem     | Medium container                  |
| `center-xl`        | 36rem     | Large container                   |
| `center-3xl`       | 48rem     | Extra large container             |
| `center-6xl`       | 72rem     | Full page width                   |
| `center-full`      | 100%      | Full available width              |
| `center-none`      | none      | No width constraint               |
| `center-text`      | -         | Center text alignment             |
| `center-intrinsic` | -         | Center based on content width     |
| `center-gutter-*`  | -         | Add horizontal padding            |
