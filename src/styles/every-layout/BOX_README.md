# Box Layout Utility

A comprehensive Tailwind CSS utility for creating consistent bordered containers with padding. Based on the Every Layout box pattern, this utility provides a flexible way to create visually distinct content containers with customizable spacing, borders, and color schemes.

## Overview

The box utility creates a padded container with a border, perfect for cards, panels, alerts, and any content that needs visual separation. It provides consistent spacing and styling while maintaining flexibility through CSS custom properties.

## Basic Usage

```html
<div class="box-4">
  <h2>Card Title</h2>
  <p>This content is inside a box with 1rem padding.</p>
</div>
```

## Utility Classes

### Padding Classes

Control the internal padding of the box:

- `box-0` - No padding
- `box-1` - 0.25rem padding
- `box-2` - 0.5rem padding
- `box-3` - 0.75rem padding
- `box-4` - 1rem padding (recommended default)
- `box-5` - 1.25rem padding
- `box-6` - 1.5rem padding
- `box-8` - 2rem padding
- `box-10` - 2.5rem padding
- `box-12` - 3rem padding
- `box-16` - 4rem padding
- `box-20` - 5rem padding
- `box-24` - 6rem padding
- `box-32` - 8rem padding
- `box-*` - Any Tailwind spacing value

### Color Modifier

- `box-inverted` - Inverts the color scheme (dark background, light text)

## CSS Variables

The box utility exposes CSS custom properties for fine-tuned control:

```css
:root {
  --s1: 1rem; /* Default padding */
  --border-width: 1px; /* Default border width */
  --box-color: var(--foreground); /* Text color */
  --box-bg: var(--background); /* Background color */
}
```

You can override these in your component:

```html
<div class="box-4" style="--border-width: 2px; --box-color: #333;">
  <p>Custom styled box</p>
</div>
```

## Examples

### Basic Box

```html
<div class="box-4">
  <h3>Simple Box</h3>
  <p>Content with consistent padding and a subtle border.</p>
</div>
```

### Card Component

```html
<article class="box-6">
  <h2>Product Card</h2>
  <img src="product.jpg" alt="Product" />
  <p>Product description with generous padding.</p>
  <button>Add to Cart</button>
</article>
```

### Inverted Alert Box

```html
<div class="box-4 box-inverted">
  <strong>Important Notice</strong>
  <p>This message stands out with inverted colors.</p>
</div>
```

### Nested Boxes

```html
<div class="box-8">
  <h2>Parent Container</h2>
  <div class="box-4 box-inverted">
    <p>Nested box with different styling</p>
  </div>
</div>
```

### Custom Border Width

```html
<div class="box-4" style="--border-width: 3px;">
  <p>Box with a thicker border for emphasis.</p>
</div>
```

### Minimal Padding Box

```html
<div class="box-2">
  <span>Compact content with minimal padding</span>
</div>
```

### Large Content Box

```html
<section class="box-12">
  <h1>Hero Section</h1>
  <p>Large padding creates breathing room for important content.</p>
  <button>Call to Action</button>
</section>
```

## How It Works

The box utility uses CSS custom properties with the following key features:

1. **Consistent Padding**: Uses the `--s1` custom property tied to Tailwind's spacing scale
2. **Smart Borders**: Uses `max()` function to ensure borders are never negative
3. **Outline Trick**: Uses transparent outline to maintain consistent sizing
4. **Color Theming**: Leverages CSS variables for easy color customization
5. **Background Control**: Separate background and foreground color variables

## Implementation Details

The box utilities use Tailwind v4's `@utility` syntax:

```css
@utility box-* {
  --s1: --spacing(--value(integer));
  --border-width: 1px;
  --box-color: var(--foreground);
  --box-bg: var(--background);

  padding: var(--s1);
  border: max(var(--border-width), 0px) solid;
  outline: calc(1px - var(--border-width)) solid transparent;
  color: var(--box-color);
  background-color: var(--box-bg);
}
```

## Combining with Other Utilities

The box utility works seamlessly with other layout utilities:

### With Stack

```html
<div class="box-6 stack-v-4">
  <h2>Stacked Content</h2>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

### With Center

```html
<div class="center-md">
  <div class="box-4">
    <p>Centered box with constrained width</p>
  </div>
</div>
```

### With Cluster

```html
<div class="box-4 cluster-2">
  <button>Action 1</button>
  <button>Action 2</button>
  <button>Action 3</button>
</div>
```

## Use Cases

### Card Layouts

```html
<div class="box-6">
  <img src="thumbnail.jpg" alt="Thumbnail" />
  <h3>Card Title</h3>
  <p>Card description text.</p>
  <a href="#">Learn More →</a>
</div>
```

### Form Containers

```html
<form class="box-8">
  <h2>Contact Form</h2>
  <label>
    Name
    <input type="text" />
  </label>
  <label>
    Email
    <input type="email" />
  </label>
  <button type="submit">Submit</button>
</form>
```

### Alert Messages

```html
<div class="box-4 box-inverted" role="alert">
  <strong>⚠️ Warning</strong>
  <p>Your session will expire in 5 minutes.</p>
</div>
```

### Code Blocks

```html
<pre class="box-4" style="--box-bg: #f5f5f5;">
  <code>
    function example() {
      return "Hello, World!";
    }
  </code>
</pre>
```

## Browser Support

This utility uses modern CSS features:

- CSS Custom Properties (CSS Variables)
- `max()` function
- `calc()` function
- Logical properties support in modern browsers

## Tips and Best Practices

1. **Choose appropriate padding**: Use `box-4` or `box-6` for most content, `box-8` or larger for hero sections
2. **Maintain hierarchy**: Use larger padding for parent containers, smaller for nested elements
3. **Consider touch targets**: Ensure interactive elements in boxes have adequate padding
4. **Use semantic HTML**: Apply box utilities to appropriate semantic elements
5. **Combine thoughtfully**: Layer box utilities with other layout patterns for complex designs
6. **Test color contrast**: Especially important with `box-inverted` modifier
7. **Avoid over-nesting**: Too many nested boxes can create excessive visual noise

## Accessibility Considerations

- Ensure sufficient color contrast between text and background
- Use appropriate ARIA roles when boxes represent specific UI patterns (alerts, navigation, etc.)
- Consider focus styles for interactive elements within boxes
- Test with screen readers to ensure content hierarchy is maintained

## Performance Notes

- The box utility is lightweight and performant
- CSS custom properties are computed efficiently
- No JavaScript required for functionality
- Minimal CSS footprint compared to component libraries

## Migration from Traditional Components

If migrating from traditional CSS or component libraries:

| Traditional Pattern | Box Utility Equivalent |
| ------------------- | ---------------------- |
| `.card`             | `box-6`                |
| `.panel`            | `box-4`                |
| `.alert`            | `box-4 box-inverted`   |
| `.well`             | `box-8`                |
| `.jumbotron`        | `box-12` or `box-16`   |

## Troubleshooting

### Border Not Visible

- Check that `--border-width` is set to a positive value
- Ensure border color contrasts with background
- Verify the element has content or explicit dimensions

### Padding Not Applied

- Confirm you're using a valid spacing value (e.g., `box-4` not `box-4px`)
- Check for conflicting padding styles
- Ensure the CSS file is properly imported

### Colors Not Working

- Verify `--foreground` and `--background` CSS variables are defined
- Check for specificity conflicts with other styles
- Use browser DevTools to inspect computed styles

## Quick Reference

| Class           | Padding  | Description                     |
| --------------- | -------- | ------------------------------- |
| `box-0`         | 0        | No padding                      |
| `box-2`         | 0.5rem   | Minimal padding                 |
| `box-4`         | 1rem     | Standard padding (recommended)  |
| `box-6`         | 1.5rem   | Comfortable padding             |
| `box-8`         | 2rem     | Generous padding                |
| `box-12`        | 3rem     | Large padding                   |
| `box-inverted`  | -        | Inverted color scheme           |
| `box-*`         | Variable | Custom Tailwind spacing value  |
