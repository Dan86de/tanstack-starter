# Stack Layout Utility

A comprehensive Tailwind CSS utility for creating vertical stacks of elements with consistent spacing. Based on the Every Layout stack pattern, this utility provides a simple and powerful way to manage vertical rhythm and spacing between elements without margins that compound or collapse.

## Overview

The stack utility creates a vertical flex container where child elements are spaced evenly apart. Unlike traditional margin-based approaches, the stack pattern uses flexbox gap for predictable, consistent spacing that doesn't compound or require special handling for first/last children.

## Basic Usage

```html
<div class="stack-v-4">
  <h2>Section Title</h2>
  <p>First paragraph of content.</p>
  <p>Second paragraph of content.</p>
  <p>Third paragraph of content.</p>
</div>
```

## Utility Classes

### Spacing Classes

Control the vertical gap between stacked elements:

- `stack-v-0` - No gap between elements
- `stack-v-0.5` - 0.125rem gap
- `stack-v-1` - 0.25rem gap
- `stack-v-2` - 0.5rem gap
- `stack-v-3` - 0.75rem gap
- `stack-v-4` - 1rem gap (recommended default)
- `stack-v-5` - 1.25rem gap
- `stack-v-6` - 1.5rem gap
- `stack-v-8` - 2rem gap
- `stack-v-10` - 2.5rem gap
- `stack-v-12` - 3rem gap
- `stack-v-16` - 4rem gap
- `stack-v-20` - 5rem gap
- `stack-v-24` - 6rem gap
- `stack-v-32` - 8rem gap
- `stack-v-*` - Any Tailwind spacing value

## CSS Variables

The stack utility uses CSS custom properties internally:

```css
/* Applied via the utility */
--stack-gap: /* Tailwind spacing value */
```

You can override spacing inline if needed:

```html
<div class="stack-v-4" style="gap: 1.5rem;">
  <div>Custom gap spacing</div>
  <div>Between elements</div>
</div>
```

## Examples

### Basic Article Layout

```html
<article class="stack-v-4">
  <h1>Article Title</h1>
  <p class="lead">Introduction paragraph with larger text.</p>
  <p>First paragraph of body content.</p>
  <p>Second paragraph of body content.</p>
  <blockquote>A relevant quote from the article.</blockquote>
  <p>Final paragraph of content.</p>
</article>
```

### Form Layout

```html
<form class="stack-v-6">
  <div class="stack-v-2">
    <label for="name">Name</label>
    <input type="text" id="name" />
  </div>
  <div class="stack-v-2">
    <label for="email">Email</label>
    <input type="email" id="email" />
  </div>
  <div class="stack-v-2">
    <label for="message">Message</label>
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>
```

### Card Component

```html
<div class="card stack-v-4">
  <img src="image.jpg" alt="Card image" />
  <h3>Card Title</h3>
  <p>Card description text goes here.</p>
  <button>Learn More</button>
</div>
```

### Dashboard Section

```html
<section class="stack-v-8">
  <header class="stack-v-2">
    <h2>Dashboard Overview</h2>
    <p>Last updated: 5 minutes ago</p>
  </header>
  <div class="grid grid-cols-3 gap-4">
    <!-- Dashboard widgets -->
  </div>
  <footer>
    <button>Refresh Data</button>
  </footer>
</section>
```

### Navigation Menu

```html
<nav class="stack-v-1">
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

### Alert Component

```html
<div class="alert stack-v-3">
  <h4>⚠️ Important Notice</h4>
  <p>Your subscription is expiring soon.</p>
  <div class="cluster-2">
    <button>Renew Now</button>
    <button>Remind Later</button>
  </div>
</div>
```

### Blog Post Layout

```html
<article class="stack-v-6">
  <header class="stack-v-3">
    <h1>Blog Post Title</h1>
    <div class="cluster-4">
      <span>By Author Name</span>
      <time>March 15, 2024</time>
      <span>5 min read</span>
    </div>
  </header>

  <div class="stack-v-4">
    <p>Opening paragraph...</p>
    <p>Body paragraph...</p>
    <h2>Subheading</h2>
    <p>More content...</p>
  </div>

  <footer class="stack-v-4">
    <div class="cluster-2">
      <span class="tag">JavaScript</span>
      <span class="tag">React</span>
      <span class="tag">Tutorial</span>
    </div>
    <div>
      <button>Share</button>
      <button>Save</button>
    </div>
  </footer>
</article>
```

## How It Works

The stack utility uses CSS Flexbox with the following key properties:

1. **Flex Container**: Creates a flex container with `display: flex`
2. **Column Direction**: Uses `flex-flow: column nowrap` for vertical stacking
3. **Gap Control**: Uses the `gap` property for consistent spacing
4. **No Margin Collapse**: Gap prevents traditional margin collapse issues
5. **Predictable Spacing**: Every child gets the same spacing automatically

## Implementation Details

The stack utility uses Tailwind v4's `@utility` syntax:

```css
@utility stack-v-* {
  display: flex;
  flex-flow: column nowrap;
  gap: --spacing(--value(integer));
}
```

## Combining with Other Utilities

### With Box

```html
<div class="box-6 stack-v-4">
  <h2>Boxed Stack</h2>
  <p>Content with consistent vertical spacing.</p>
  <p>Inside a padded, bordered container.</p>
</div>
```

### With Center

```html
<div class="center-lg stack-v-6">
  <h1>Centered Stack</h1>
  <p>Content that is both centered horizontally</p>
  <p>and stacked vertically with proper spacing.</p>
</div>
```

### With Cluster

```html
<div class="stack-v-4">
  <h2>Actions</h2>
  <div class="cluster-2">
    <button>Save</button>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</div>
```

### With Sidebar

```html
<div class="sidebar-left sidebar-w-sm">
  <aside class="stack-v-4">
    <h3>Sidebar</h3>
    <nav class="stack-v-2">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </nav>
  </aside>
  <main class="stack-v-6">
    <h1>Main Content</h1>
    <p>Content goes here...</p>
  </main>
</div>
```

## Use Cases

### Settings Panel

```html
<div class="stack-v-6">
  <h2>Settings</h2>

  <section class="stack-v-4">
    <h3>Profile</h3>
    <label class="stack-v-2">
      <span>Display Name</span>
      <input type="text" />
    </label>
    <label class="stack-v-2">
      <span>Bio</span>
      <textarea></textarea>
    </label>
  </section>

  <section class="stack-v-4">
    <h3>Preferences</h3>
    <label>
      <input type="checkbox" /> Email notifications
    </label>
    <label>
      <input type="checkbox" /> Dark mode
    </label>
  </section>

  <button>Save Changes</button>
</div>
```

### FAQ Section

```html
<section class="stack-v-8">
  <h2>Frequently Asked Questions</h2>

  <details class="stack-v-2">
    <summary>What is the return policy?</summary>
    <p>Our return policy details...</p>
  </details>

  <details class="stack-v-2">
    <summary>How long does shipping take?</summary>
    <p>Shipping information...</p>
  </details>

  <details class="stack-v-2">
    <summary>Do you ship internationally?</summary>
    <p>International shipping details...</p>
  </details>
</section>
```

### Comment Thread

```html
<div class="stack-v-6">
  <article class="stack-v-3">
    <header>
      <strong>User Name</strong>
      <time>2 hours ago</time>
    </header>
    <p>Comment text goes here...</p>
    <button>Reply</button>
  </article>

  <article class="stack-v-3 ml-8">
    <header>
      <strong>Another User</strong>
      <time>1 hour ago</time>
    </header>
    <p>Reply text goes here...</p>
    <button>Reply</button>
  </article>
</div>
```

### Product Details

```html
<div class="stack-v-6">
  <div class="stack-v-2">
    <h1>Product Name</h1>
    <p class="text-2xl">$99.99</p>
  </div>

  <div class="stack-v-4">
    <p>Product description...</p>
    <ul class="stack-v-2">
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>
  </div>

  <div class="stack-v-3">
    <label class="stack-v-1">
      <span>Quantity</span>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </label>
    <button>Add to Cart</button>
  </div>
</div>
```

## Responsive Considerations

The stack utility maintains consistent spacing across all viewport sizes by default. You can adjust spacing at different breakpoints:

```html
<!-- Tighter spacing on mobile, looser on desktop -->
<div class="stack-v-4 md:stack-v-6 lg:stack-v-8">
  <h1>Responsive Stack</h1>
  <p>Content with responsive vertical spacing.</p>
  <p>Adapts to different screen sizes.</p>
</div>
```

## Browser Support

This utility uses modern CSS features:

- CSS Flexbox
- `gap` property for flexbox
- CSS Custom Properties (internally)
- Modern flex-flow syntax

## Tips and Best Practices

1. **Choose consistent spacing**: Use `stack-v-4` as a default, adjust for specific contexts
2. **Avoid margin on children**: Let the stack handle all vertical spacing
3. **Nest stacks thoughtfully**: Different gap sizes create visual hierarchy
4. **Use semantic HTML**: Stack works with any HTML elements
5. **Consider readability**: Larger gaps between major sections, smaller within
6. **Test with dynamic content**: Ensure spacing works with varying content amounts
7. **Combine with horizontal layouts**: Use with cluster or sidebar for complete layouts

## Accessibility Considerations

- The stack pattern doesn't affect document structure or semantics
- Screen readers navigate normally through stacked content
- Maintains natural tab order for keyboard navigation
- Works well with landmark elements and ARIA regions
- Consistent spacing improves visual scanning

## Performance Notes

- Lightweight CSS implementation
- No JavaScript required
- Efficient flexbox rendering
- No margin collapse calculations
- Minimal reflows when content changes
- Works well with dynamic content insertion

## Migration from Traditional Approaches

If migrating from margin-based spacing:

| Traditional Pattern | Stack Utility Equivalent |
| ------------------- | ----------------------- |
| `.mb-4` on each element | Parent with `stack-v-4` |
| `:last-child { margin-bottom: 0 }` | `stack-v-*` (automatic) |
| `:first-child { margin-top: 0 }` | `stack-v-*` (automatic) |
| `.space-y-4` | `stack-v-4` |
| Manually managed margins | `stack-v-*` |
| `.vspace` helper classes | `stack-v-*` |

## Common Patterns

### Page Layout

```html
<body class="stack-v-0">
  <header class="stack-v-4">
    <!-- Header content -->
  </header>

  <main class="stack-v-8">
    <!-- Main sections -->
  </main>

  <footer class="stack-v-4">
    <!-- Footer content -->
  </footer>
</body>
```

### Modal Content

```html
<div class="modal-content stack-v-6">
  <header class="stack-v-2">
    <h2>Modal Title</h2>
    <p>Modal description</p>
  </header>

  <div class="stack-v-4">
    <!-- Modal body content -->
  </div>

  <footer class="cluster-4">
    <button>Cancel</button>
    <button>Confirm</button>
  </footer>
</div>
```

## Troubleshooting

### Spacing Not Applied

- Ensure the parent has `stack-v-*` class
- Check for conflicting display properties
- Verify CSS file is properly imported
- Check browser support for flexbox gap

### Uneven Spacing

- Remove margins from child elements
- Check for padding on children that affects visual spacing
- Ensure no nested elements are breaking the stack flow

### Items Not Stacking

- Verify `flex-flow: column` is applied
- Check for conflicting flex-direction styles
- Ensure children are direct descendants

### Gap Not Working

- Check browser support for flexbox gap
- Verify no override styles on gap property
- Consider fallback for older browsers if needed

## Quick Reference

| Class         | Gap     | Description                        |
| ------------- | ------- | ---------------------------------- |
| `stack-v-0`   | 0       | No spacing                        |
| `stack-v-1`   | 0.25rem | Minimal spacing                   |
| `stack-v-2`   | 0.5rem  | Tight spacing                     |
| `stack-v-4`   | 1rem    | Standard spacing (recommended)    |
| `stack-v-6`   | 1.5rem  | Comfortable spacing               |
| `stack-v-8`   | 2rem    | Generous spacing                  |
| `stack-v-12`  | 3rem    | Large section spacing             |
| `stack-v-*`   | Variable | Custom Tailwind spacing value   |
