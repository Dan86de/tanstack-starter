# Sidebar Layout Utility

A comprehensive Tailwind CSS utility for creating responsive sidebar layouts. Based on the Every Layout sidebar pattern, this utility provides a flexible two-column layout that automatically stacks when space is constrained.

## Overview

The sidebar utility creates a layout where two elements sit side-by-side when space permits. One element (the sidebar) has a set width, while the companion element takes up the remaining horizontal space. When the viewport becomes too narrow, the elements automatically stack into a single column.

## Basic Usage

```html
<div class="sidebar-left sidebar-gap-4 sidebar-w-sm">
  <aside>Sidebar content</aside>
  <main>Main content</main>
</div>
```

## Utility Classes

### Position Classes

- `sidebar-left` - Places the sidebar on the left (default)
- `sidebar-right` - Places the sidebar on the right
- `sidebar-reverse` - Reverses the layout direction

### Width Classes

Control the width of the sidebar element:

**Preset Sizes:**

- `sidebar-w-xs` - 16rem width
- `sidebar-w-sm` - 20rem width (recommended default)
- `sidebar-w-md` - 24rem width
- `sidebar-w-lg` - 28rem width
- `sidebar-w-xl` - 32rem width
- `sidebar-w-2xl` - 36rem width
- `sidebar-w-3xl` - 42rem width

**Fractional Widths:**

- `sidebar-w-1-4` - 25% of container
- `sidebar-w-1-3` - 33.333% of container
- `sidebar-w-1-2` - 50% of container
- `sidebar-w-2-3` - 66.667% of container
- `sidebar-w-3-4` - 75% of container

**Dynamic Width:**

- `sidebar-w-auto` - Width based on sidebar content
- `sidebar-w-*` - Custom spacing value (uses Tailwind spacing scale)

### Gap Classes

Control the space between sidebar and content:

- `sidebar-gap-0` - No gap
- `sidebar-gap-1` - 0.25rem gap
- `sidebar-gap-2` - 0.5rem gap
- `sidebar-gap-4` - 1rem gap (default)
- `sidebar-gap-6` - 1.5rem gap
- `sidebar-gap-8` - 2rem gap
- `sidebar-gap-*` - Any Tailwind spacing value

### Content Minimum Width

Control when the layout breaks into stacked columns:

- `sidebar-content-min-1-4` - Stacks when content < 25% of container
- `sidebar-content-min-1-3` - Stacks when content < 33.333% of container
- `sidebar-content-min-1-2` - Stacks when content < 50% of container (default)
- `sidebar-content-min-2-3` - Stacks when content < 66.667% of container
- `sidebar-content-min-3-4` - Stacks when content < 75% of container
- `sidebar-content-min-*` - Custom percentage value

### Modifiers

- `sidebar-no-stretch` - Elements maintain natural height (disables equal height columns)

### Shortcut Classes

Convenient combinations of common settings:

- `sidebar-left-sm` - Left sidebar with small width
- `sidebar-left-md` - Left sidebar with medium width
- `sidebar-left-lg` - Left sidebar with large width
- `sidebar-right-sm` - Right sidebar with small width
- `sidebar-right-md` - Right sidebar with medium width
- `sidebar-right-lg` - Right sidebar with large width

## Important: Fractional Class Naming

⚠️ **Tailwind v4 requires alphanumeric utility names, so fractional values use hyphens instead of slashes:**

```html
<!-- ✅ Correct -->
<div class="sidebar-w-1-3">...</div>
<div class="sidebar-content-min-3-4">...</div>

<!-- ❌ Invalid (slashes not allowed in utility names) -->
<div class="sidebar-w-1/3">...</div>
<div class="sidebar-content-min-3/4">...</div>
```

The naming convention follows the pattern:

- `sidebar-w-1-3` represents 1/3 width (33.333%)
- `sidebar-w-3-4` represents 3/4 width (75%)
- `sidebar-content-min-2-3` represents 2/3 minimum (66.667%)

## Examples

### Basic Left Sidebar

```html
<div class="sidebar-left sidebar-gap-4 sidebar-w-sm">
  <nav>Navigation menu</nav>
  <main>Page content</main>
</div>
```

### Right Sidebar with Large Gap

```html
<div class="sidebar-right sidebar-gap-8 sidebar-w-md">
  <article>Main article</article>
  <aside>Related links</aside>
</div>
```

### Fractional Width Sidebar

```html
<div class="sidebar-left sidebar-gap-4 sidebar-w-1-3">
  <aside>1/3 width sidebar</aside>
  <main>2/3 width content</main>
</div>
```

### Early Stacking with Natural Heights

```html
<div
  class="sidebar-left sidebar-gap-4 sidebar-w-xs sidebar-content-min-3-4 sidebar-no-stretch"
>
  <aside>Narrow sidebar</aside>
  <main>Content that needs more space</main>
</div>
```

### Complex Configuration

```html
<div
  class="sidebar-right sidebar-gap-6 sidebar-w-lg sidebar-content-min-2-3 sidebar-no-stretch"
>
  <main>Main content area</main>
  <aside>Wide sidebar with natural height</aside>
</div>
```

## How It Works

The sidebar utility uses CSS Flexbox with the following key properties:

1. **Flex Container**: The parent element becomes a flex container with `flex-wrap: wrap`
2. **Flexible Growth**: Both children have `flex-grow: 1` as a base
3. **Sidebar Width**: The sidebar element gets a `flex-basis` equal to the specified width
4. **Content Expansion**: The content element has `flex-basis: 0` and `flex-grow: 999` to fill remaining space
5. **Responsive Stacking**: The `min-inline-size` on the content forces stacking when space is insufficient

## CSS Variables

The utility uses CSS custom properties that can be overridden:

```css
:root {
  --sidebar-default-width: 20rem;
  --sidebar-content-min: 50%;
  --sidebar-gap: 1rem;
}
```

You can override these in your component:

```html
<div class="sidebar-left" style="--sidebar-gap: 2rem; --sidebar-width: 18rem;">
  <aside>Custom sidebar</aside>
  <main>Content</main>
</div>
```

## Implementation Details

The sidebar utilities use Tailwind v4's `@utility` syntax with CSS nesting:

```css
@utility sidebar-left {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sidebar-gap);

  & > * {
    flex-grow: 1;
  }

  & > :first-child {
    flex-basis: var(--sidebar-width, var(--sidebar-default-width));
    flex-grow: 0;
  }

  & > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: var(--sidebar-content-min);
  }
}
```

## Browser Support

This utility uses modern CSS features:

- CSS Flexbox
- CSS Custom Properties (CSS Variables)
- `min-inline-size` logical property
- `gap` property for flexbox
- CSS Nesting (for the utility definitions)

For older browsers, consider using the included fallback styles or progressive enhancement strategies.

## Tips and Best Practices

1. **Choose appropriate widths**: Start with `sidebar-w-sm` (20rem) for navigation, `sidebar-w-md` (24rem) for filters/controls
2. **Consider content requirements**: Use `sidebar-content-min-2-3` or `sidebar-content-min-3-4` when main content needs more space
3. **Use semantic HTML**: Always use appropriate elements (`<nav>`, `<aside>`, `<main>`, etc.)
4. **Test responsiveness**: Always test the stacking behavior at different viewport sizes
5. **Combine modifiers**: You can combine multiple utility classes for precise control
6. **Remember the naming convention**: Fractional classes use hyphens (e.g., `sidebar-w-1-3` for 1/3 width)

## Migration from Web Component

If you're migrating from the sidebar web component to these utilities:

| Web Component Attribute | Utility Class Equivalent  |
| ----------------------- | ------------------------- |
| `side="left"`           | `sidebar-left`            |
| `side="right"`          | `sidebar-right`           |
| `sideWidth="20rem"`     | `sidebar-w-sm`            |
| `contentMin="75%"`      | `sidebar-content-min-3-4` |
| `space="2rem"`          | `sidebar-gap-8`           |
| `noStretch`             | `sidebar-no-stretch`      |

## Related Utilities

This sidebar utility works well with other Every Layout utilities:

- Use with `stack-v-*` for vertical spacing within sidebar or content
- Combine with `cluster-*` for horizontal grouping within sections
- Nest inside `center-*` for contained layouts
- Apply `box-*` for consistent padding and borders

## Troubleshooting

### Classes Not Working

- Ensure you're using the correct naming convention: `sidebar-w-1-3` not `sidebar-w-1/3`
- Check that the parent has exactly two child elements
- Verify the CSS file is properly imported in your styles

### Layout Not Stacking

- Check the `sidebar-content-min-*` value - a higher percentage will cause earlier stacking
- Ensure the viewport is actually narrow enough to trigger stacking
- Verify that both elements are direct children of the sidebar container

### Unequal Heights

- This is expected behavior with `sidebar-no-stretch`
- Remove `sidebar-no-stretch` if you want equal height columns
- Use `align-items: stretch` (default) for equal heights

## Quick Reference

| Class Pattern           | Description           | Example                         |
| ----------------------- | --------------------- | ------------------------------- |
| `sidebar-left`          | Left sidebar layout   | Default positioning             |
| `sidebar-right`         | Right sidebar layout  | Sidebar on right side           |
| `sidebar-gap-*`         | Gap between elements  | `sidebar-gap-4`                 |
| `sidebar-w-*`           | Sidebar width         | `sidebar-w-sm`, `sidebar-w-1-3` |
| `sidebar-content-min-*` | Minimum content width | `sidebar-content-min-2-3`       |
| `sidebar-no-stretch`    | Natural heights       | No equal height columns         |
| `sidebar-left-sm`       | Shortcut utility      | Left sidebar, 20rem width       |
