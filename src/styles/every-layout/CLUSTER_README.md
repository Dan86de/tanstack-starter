# Cluster Layout Utility

A comprehensive Tailwind CSS utility for creating responsive horizontal groupings of elements. Based on the Every Layout cluster pattern, this utility provides a flexible way to group related items that wrap naturally when space is constrained.

## Overview

The cluster utility creates a flexbox container that arranges child elements horizontally with consistent spacing. When horizontal space runs out, items wrap to the next line, maintaining the same gap between all elements. Perfect for navigation bars, button groups, tag lists, and any collection of related items.

## Basic Usage

```html
<div class="cluster-4">
  <button>Save</button>
  <button>Edit</button>
  <button>Delete</button>
</div>
```

## Utility Classes

### Gap Classes

Control the space between clustered elements:

- `cluster` - Default 1rem gap
- `cluster-0` - No gap
- `cluster-0.5` - 0.125rem gap
- `cluster-1` - 0.25rem gap
- `cluster-2` - 0.5rem gap
- `cluster-3` - 0.75rem gap
- `cluster-4` - 1rem gap (recommended default)
- `cluster-5` - 1.25rem gap
- `cluster-6` - 1.5rem gap
- `cluster-8` - 2rem gap
- `cluster-10` - 2.5rem gap
- `cluster-12` - 3rem gap
- `cluster-16` - 4rem gap
- `cluster-*` - Any Tailwind spacing value

## CSS Variables

The cluster utility uses CSS custom properties for customization:

```css
:root {
  --cluster-gap: 1rem; /* Default gap between items */
}
```

You can override this in your component:

```html
<div class="cluster-4" style="--cluster-gap: 1.5rem;">
  <span>Custom</span>
  <span>Gap</span>
  <span>Cluster</span>
</div>
```

## Examples

### Button Group

```html
<div class="cluster-2">
  <button class="btn-primary">Primary</button>
  <button class="btn-secondary">Secondary</button>
  <button class="btn-outline">Cancel</button>
</div>
```

### Navigation Menu

```html
<nav class="cluster-6">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/services">Services</a>
  <a href="/contact">Contact</a>
</nav>
```

### Tag List

```html
<div class="cluster-2">
  <span class="tag">JavaScript</span>
  <span class="tag">React</span>
  <span class="tag">Node.js</span>
  <span class="tag">TypeScript</span>
  <span class="tag">CSS</span>
</div>
```

### Social Media Icons

```html
<div class="cluster-4">
  <a href="#" aria-label="Facebook">
    <svg><!-- Facebook icon --></svg>
  </a>
  <a href="#" aria-label="Twitter">
    <svg><!-- Twitter icon --></svg>
  </a>
  <a href="#" aria-label="LinkedIn">
    <svg><!-- LinkedIn icon --></svg>
  </a>
</div>
```

### Form Actions

```html
<form>
  <!-- Form fields -->
  <div class="cluster-4">
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <a href="/cancel">Cancel</a>
  </div>
</form>
```

### Pagination

```html
<div class="cluster-1">
  <button>Previous</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
  <button>Next</button>
</div>
```

### Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb" class="cluster-2">
  <a href="/">Home</a>
  <span>/</span>
  <a href="/products">Products</a>
  <span>/</span>
  <span aria-current="page">Current Item</span>
</nav>
```

## How It Works

The cluster utility uses CSS Flexbox with the following key properties:

1. **Flex Container**: Creates a flex container with `display: flex`
2. **Wrapping**: Uses `flex-wrap: wrap` to allow items to flow to next line
3. **Gap Control**: Uses the `gap` property for consistent spacing
4. **Alignment**: Centers items vertically with `align-items: center`
5. **Justification**: Starts items from the left with `justify-content: flex-start`

## Implementation Details

The cluster utilities use Tailwind v4's `@utility` syntax:

```css
@utility cluster-* {
  --cluster-gap: --spacing(--value(integer));
  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-gap, 1rem);
  justify-content: flex-start;
  align-items: center;
}

@utility cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
}
```

## Combining with Other Utilities

### With Box

```html
<div class="box-4 cluster-3">
  <span class="badge">New</span>
  <span class="badge">Featured</span>
  <span class="badge">Sale</span>
</div>
```

### With Center

```html
<div class="center-lg">
  <nav class="cluster-6">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </nav>
</div>
```

### With Stack

```html
<div class="stack-v-4">
  <h2>Filter Options</h2>
  <div class="cluster-2">
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
  </div>
</div>
```

### With Sidebar

```html
<div class="sidebar-left sidebar-w-sm">
  <aside>Sidebar</aside>
  <main>
    <div class="cluster-4">
      <button>Action 1</button>
      <button>Action 2</button>
    </div>
  </main>
</div>
```

## Use Cases

### Card Actions

```html
<article class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
  <div class="cluster-3">
    <button>Like</button>
    <button>Share</button>
    <button>Save</button>
  </div>
</article>
```

### Toolbar

```html
<div class="toolbar cluster-2">
  <button aria-label="Bold">
    <strong>B</strong>
  </button>
  <button aria-label="Italic">
    <em>I</em>
  </button>
  <button aria-label="Underline">
    <u>U</u>
  </button>
  <span class="divider">|</span>
  <button>Link</button>
  <button>Image</button>
</div>
```

### Filter Pills

```html
<div class="cluster-2">
  <button class="pill active">All Products</button>
  <button class="pill">Electronics</button>
  <button class="pill">Clothing</button>
  <button class="pill">Books</button>
  <button class="pill">Home & Garden</button>
</div>
```

### Icon and Text Combinations

```html
<div class="cluster-2">
  <div class="cluster-1">
    <svg><!-- icon --></svg>
    <span>Download</span>
  </div>
  <div class="cluster-1">
    <svg><!-- icon --></svg>
    <span>Print</span>
  </div>
  <div class="cluster-1">
    <svg><!-- icon --></svg>
    <span>Share</span>
  </div>
</div>
```

## Responsive Considerations

The cluster utility is inherently responsive:

- Items automatically wrap when space is constrained
- No media queries needed for basic functionality
- Gap remains consistent across all breakpoints
- Works well with dynamic content

### Responsive Gap Adjustments

```html
<!-- Different gaps at different breakpoints -->
<div class="cluster-2 md:cluster-4 lg:cluster-6">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

## Alignment Variations

While the default cluster aligns items to center and justifies to start, you can combine with Tailwind utilities for variations:

```html
<!-- Right-aligned cluster -->
<div class="cluster-4 justify-end">
  <button>Save</button>
  <button>Cancel</button>
</div>

<!-- Centered cluster -->
<div class="cluster-4 justify-center">
  <a href="#">Previous</a>
  <span>Page 2 of 10</span>
  <a href="#">Next</a>
</div>

<!-- Space-between cluster -->
<div class="cluster-4 justify-between">
  <span>Showing 1-10 of 100</span>
  <div class="cluster-2">
    <button>Previous</button>
    <button>Next</button>
  </div>
</div>
```

## Browser Support

This utility uses modern CSS features:

- CSS Flexbox
- CSS Custom Properties (CSS Variables)
- `gap` property for flexbox
- Modern flex properties

## Tips and Best Practices

1. **Choose appropriate gaps**: Use `cluster-2` for tight groupings, `cluster-4` for default spacing
2. **Consider touch targets**: Ensure adequate spacing for touch devices (minimum 44px targets)
3. **Use semantic markup**: Choose appropriate HTML elements for the content type
4. **Mind the wrapping**: Test how items look when they wrap to multiple lines
5. **Combine thoughtfully**: Layer with other utilities for complex layouts
6. **Maintain visual hierarchy**: Use consistent gap sizes within the same context
7. **Consider reading direction**: Default left-alignment works for LTR languages

## Accessibility Considerations

- Use semantic HTML elements (`<nav>`, `<menu>`, etc.) when appropriate
- Add ARIA labels for icon-only buttons
- Ensure keyboard navigation works correctly
- Consider focus order when items wrap
- Provide adequate color contrast for all elements
- Test with screen readers

## Performance Notes

- Lightweight CSS implementation
- No JavaScript required
- Efficient flexbox rendering
- Minimal reflows on wrap
- Works well with dynamic content addition/removal

## Migration from Traditional Approaches

If migrating from traditional CSS patterns:

| Traditional Pattern | Cluster Utility Equivalent |
| ------------------- | -------------------------- |
| `.btn-group`        | `cluster-1` or `cluster-2` |
| `.nav-list`         | `cluster-4` or `cluster-6` |
| `.tag-cloud`        | `cluster-2`                |
| `display: inline-block` with margins | `cluster-*` |
| Float-based layouts | `cluster-*`                |
| `.pill-list`        | `cluster-2`                |

## Common Patterns

### Header Navigation

```html
<header>
  <div class="cluster-6 justify-between">
    <div class="cluster-4">
      <a href="/" class="logo">Logo</a>
      <nav class="cluster-6">
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="cluster-4">
      <button>Sign In</button>
      <button>Sign Up</button>
    </div>
  </div>
</header>
```

### Footer Links

```html
<footer>
  <div class="cluster-8">
    <div class="cluster-4">
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      <a href="/cookies">Cookies</a>
    </div>
    <div class="cluster-4">
      <a href="/facebook">Facebook</a>
      <a href="/twitter">Twitter</a>
      <a href="/instagram">Instagram</a>
    </div>
  </div>
</footer>
```

## Troubleshooting

### Items Not Wrapping

- Ensure `flex-wrap: wrap` is applied
- Check for `white-space: nowrap` on child elements
- Verify container has width constraints

### Uneven Gaps

- Check for margin styles on child elements
- Ensure using `gap` property consistently
- Remove any additional spacing utilities on children

### Alignment Issues

- Verify `align-items: center` is applied
- Check child elements for conflicting alignment
- Consider if all items should have same height

### Items Not Showing

- Check for `display: none` or visibility issues
- Verify child elements have content
- Ensure proper HTML structure

## Quick Reference

| Class        | Gap    | Description                          |
| ------------ | ------ | ------------------------------------ |
| `cluster`    | 1rem   | Default cluster with standard gap   |
| `cluster-0`  | 0      | No gap between items                |
| `cluster-1`  | 0.25rem | Minimal gap                        |
| `cluster-2`  | 0.5rem | Tight grouping                      |
| `cluster-4`  | 1rem   | Standard spacing (recommended)      |
| `cluster-6`  | 1.5rem | Comfortable spacing                 |
| `cluster-8`  | 2rem   | Generous spacing                    |
| `cluster-*`  | Variable | Custom Tailwind spacing value     |
