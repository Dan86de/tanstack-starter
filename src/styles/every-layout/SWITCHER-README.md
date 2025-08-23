# Switcher Utility

The Switcher utility is a powerful CSS layout pattern that automatically switches between horizontal and vertical layouts based on container width, without using media queries or JavaScript.

## Overview

The Switcher component creates a responsive layout that intelligently switches between:
- **Horizontal layout**: When there's enough space, items are displayed side-by-side with equal widths
- **Vertical layout**: When space is constrained, items stack vertically

This is achieved using the CSS flexbox "holy albatross" technique, which uses a combination of `flex-wrap`, `flex-grow`, and a clever `flex-basis` calculation.

## How It Works

The magic happens with this CSS calculation:
```css
flex-basis: calc((var(--switcher-threshold, 30rem) - 100%) * 999);
```

- When the container is wider than the threshold, `(threshold - 100%)` is negative, resulting in a negative flex-basis (clamped to 0), allowing items to sit side-by-side
- When the container is narrower than the threshold, `(threshold - 100%)` is positive, resulting in a large flex-basis that forces wrapping
- The multiplication by 999 ensures the value is large enough to force wrapping when positive

## Basic Usage

```html
<div class="switcher-md switcher-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Available Classes

### Threshold Classes (Required - Choose One)

These control when the switch happens:

- `switcher-sm` - Switches at 20rem container width (~320px)
- `switcher-md` - Switches at 30rem container width (~480px)
- `switcher-lg` - Switches at 40rem container width (~640px)
- `switcher-xl` - Switches at 50rem container width (~800px)
- `switcher-2xl` - Switches at 60rem container width (~960px)

### Gap Classes (Optional)

Control spacing between items using Tailwind's spacing scale:

- `switcher-gap-0` - 0 (no gap)
- `switcher-gap-1` - 0.25rem
- `switcher-gap-2` - 0.5rem
- `switcher-gap-3` - 0.75rem
- `switcher-gap-4` - 1rem (recommended default)
- `switcher-gap-5` - 1.25rem
- `switcher-gap-6` - 1.5rem
- `switcher-gap-8` - 2rem
- `switcher-gap-10` - 2.5rem
- `switcher-gap-12` - 3rem
- `switcher-gap-16` - 4rem
- `switcher-gap-20` - 5rem
- `switcher-gap-24` - 6rem

Note: You can use any value from Tailwind's spacing scale (0-96, px, etc.)

### Limit Attribute (Optional)

Force vertical layout when you have too many items:

```html
<div class="switcher-md switcher-gap-4" data-limit="3">
  <!-- Will switch to vertical if more than 3 items -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> <!-- This triggers vertical layout -->
</div>
```

Available limits: `data-limit="1"` through `data-limit="5"`

## Common Use Cases

### Navigation Bar
```html
<nav class="switcher-sm switcher-gap-2 rounded bg-gray-800 p-4 text-white">
  <a href="#" class="rounded px-4 py-2 hover:bg-gray-700 text-center">Home</a>
  <a href="#" class="rounded px-4 py-2 hover:bg-gray-700 text-center">Products</a>
  <a href="#" class="rounded px-4 py-2 hover:bg-gray-700 text-center">About</a>
  <a href="#" class="rounded px-4 py-2 hover:bg-gray-700 text-center">Contact</a>
</nav>
```

### Feature Cards
```html
<div class="switcher-lg switcher-gap-6" data-limit="3">
  <div class="card">
    <h3>Feature 1</h3>
    <p>Description text</p>
  </div>
  <div class="card">
    <h3>Feature 2</h3>
    <p>Description text</p>
  </div>
  <div class="card">
    <h3>Feature 3</h3>
    <p>Description text</p>
  </div>
</div>
```

### Form Fields
```html
<form>
  <div class="switcher-md switcher-gap-4">
    <div class="form-group">
      <label>First Name</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text">
    </div>
  </div>
</form>
```

### Pricing Cards
```html
<div class="switcher-xl switcher-gap-6" data-limit="3">
  <div class="pricing-card">
    <h3>Starter</h3>
    <p class="price">$9/mo</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
    <button>Choose Plan</button>
  </div>
  <div class="pricing-card">
    <h3>Professional</h3>
    <p class="price">$29/mo</p>
    <ul>
      <li>All Starter features</li>
      <li>Feature 3</li>
      <li>Feature 4</li>
    </ul>
    <button>Choose Plan</button>
  </div>
  <div class="pricing-card">
    <h3>Enterprise</h3>
    <p class="price">$99/mo</p>
    <ul>
      <li>All Pro features</li>
      <li>Feature 5</li>
      <li>Feature 6</li>
    </ul>
    <button>Choose Plan</button>
  </div>
</div>
```

### Footer Sections
```html
<footer>
  <div class="switcher-lg switcher-gap-8" data-limit="4">
    <div>
      <h4>Company</h4>
      <a href="#">About</a>
      <a href="#">Team</a>
      <a href="#">Careers</a>
    </div>
    <div>
      <h4>Products</h4>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Security</a>
    </div>
    <div>
      <h4>Resources</h4>
      <a href="#">Documentation</a>
      <a href="#">Guides</a>
      <a href="#">Support</a>
    </div>
    <div>
      <h4>Legal</h4>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">License</a>
    </div>
  </div>
</footer>
```

## Custom Values

You can also use CSS custom properties for fine-tuned control:

```html
<div class="switcher-md" style="--switcher-threshold: 35rem; --switcher-gap: 1.25rem;">
  <div>Custom threshold of 35rem</div>
  <div>Custom gap of 1.25rem</div>
</div>
```

The gap utilities use Tailwind's spacing scale system, so any valid Tailwind spacing value works (e.g., `switcher-gap-0.5`, `switcher-gap-14`, `switcher-gap-32`, etc.)

## Choosing the Right Threshold

- **switcher-sm (20rem)**: Best for navigation bars and small UI elements
- **switcher-md (30rem)**: Good default for most content cards
- **switcher-lg (40rem)**: Ideal for feature sections with more content
- **switcher-xl (50rem)**: Perfect for pricing cards or larger content blocks
- **switcher-2xl (60rem)**: Use for very wide content that should stay horizontal longer

## Benefits

- **No JavaScript Required**: Pure CSS solution
- **Container-Based**: Responds to container width, not viewport
- **Flexible**: Works with any number of items
- **Predictable**: Consistent switching behavior
- **Equal Widths**: Items share available space equally in horizontal layout
- **Progressive Enhancement**: Works without any JavaScript
- **Maintainable**: No complex media query management

## Browser Support

The Switcher utility uses modern CSS features that are well-supported:
- Flexbox (all modern browsers)
- CSS Custom Properties (all modern browsers)
- `calc()` function (all modern browsers)
- `:nth-last-child()` selector (all modern browsers)

## Tips and Best Practices

1. **Always use a threshold class**: Every switcher needs one (switcher-sm, switcher-md, etc.)
2. **Add gap classes for spacing**: Use switcher-gap-4 as a good default (matches Tailwind's spacing scale)
3. **Test with real content**: The switching point depends on actual content width
4. **Use data-limit wisely**: Prevents too many items from cramming horizontally
5. **Consider nesting**: You can nest switchers for complex layouts
6. **Combine with other utilities**: Works great with Stack utility for internal spacing
7. **Leverage Tailwind's spacing scale**: Gap values follow the same scale as Tailwind's padding/margin utilities

## Comparison with Traditional Approaches

### Media Query Approach (Less Flexible)
```css
/* Requires viewport-based breakpoints */
.container { display: block; }
@media (min-width: 768px) {
  .container { display: flex; }
}
```

### Switcher Approach (Container-Aware)
```html
<!-- Automatically responds to available space -->
<div class="switcher-md switcher-gap-4">...</div>
```

The Switcher adapts to its container, making it perfect for components that might be used in different contexts (main content, sidebars, modals, cards, etc.).

## Common Patterns

### Responsive Card Grid
```html
<!-- 3 cards that stack on mobile -->
<div class="switcher-lg switcher-gap-6" data-limit="3">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

### Two-Column Form
```html
<!-- Form fields side-by-side on desktop, stacked on mobile -->
<form>
  <div class="switcher-md switcher-gap-4">
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
  </div>
  <div class="switcher-md switcher-gap-4">
    <input type="email" placeholder="Email">
    <input type="tel" placeholder="Phone">
  </div>
</form>
```

### Adaptive Button Group
```html
<!-- Buttons that stack when space is tight -->
<div class="switcher-sm switcher-gap-2">
  <button class="btn-primary">Save Changes</button>
  <button class="btn-secondary">Cancel</button>
  <button class="btn-secondary">Reset</button>
</div>
```

## Debugging

If the switcher isn't working as expected:

1. **Check you have a threshold class**: Must use switcher-sm, switcher-md, etc.
2. **Verify container width**: The switch depends on the container, not viewport
3. **Inspect flex properties**: Use browser DevTools to check flex-basis calculation
4. **Test without limit**: Remove data-limit to see if that's forcing vertical
5. **Check CSS is loaded**: Ensure the switcher.css file is imported correctly

## Summary

The Switcher utility provides a powerful, container-aware layout solution that eliminates the need for breakpoint-based thinking. By responding to available space rather than viewport size, it creates truly flexible components that work correctly whether they're in the main content area, a sidebar, a modal, or any other context.
