import { useId } from "react";

export function CenterDemo() {
	return (
		<div className="space-y-12 p-8">
			<section>
				<h2 className="mb-6 font-bold text-2xl">Center Layout Demos</h2>

				{/* Basic Centered Content */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Basic Centered Content</h3>
					<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
						<div className="center">
							<h1 className="mb-4 font-bold text-2xl">Centered Content</h1>
							<p className="mb-4">
								This content is centered with a default max-width of 65ch for
								optimal readability. The center utility ensures that the text
								doesn't stretch too wide on large screens, maintaining a
								comfortable reading experience.
							</p>
							<p>
								Notice how the content maintains a consistent width regardless
								of the viewport size, while still being responsive and centered
								horizontally.
							</p>
						</div>
					</div>
				</div>

				{/* Different Container Sizes */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Different Container Sizes
					</h3>
					<div className="space-y-4">
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<div className="center-sm rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="mb-2 font-semibold">Small (center-sm)</h4>
								<p className="text-sm">
									Max width: 24rem. Perfect for narrow content like forms or
									cards.
								</p>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<div className="center-lg rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="mb-2 font-semibold">Large (center-lg)</h4>
								<p className="text-sm">
									Max width: 32rem. Good for medium-width content sections.
								</p>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<div className="center-3xl rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="mb-2 font-semibold">3XL (center-3xl)</h4>
								<p className="text-sm">
									Max width: 48rem. Suitable for wider content areas while
									maintaining structure.
								</p>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<div className="center-6xl rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="mb-2 font-semibold">6XL (center-6xl)</h4>
								<p className="text-sm">
									Max width: 72rem. Great for full page layouts and dashboards.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Wide Container for Dashboard */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Wide Container for Dashboard
					</h3>
					<div className="center-6xl rounded bg-white p-6 shadow-md dark:bg-gray-800">
						<header className="mb-4">
							<h2 className="font-bold text-xl">Dashboard</h2>
						</header>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							<div className="rounded bg-blue-50 p-4 dark:bg-blue-900">
								<h3 className="mb-2 font-semibold">Widget 1</h3>
								<p className="text-3xl">1,234</p>
								<p className="text-gray-600 text-sm dark:text-gray-400">
									Total Users
								</p>
							</div>
							<div className="rounded bg-green-50 p-4 dark:bg-green-900">
								<h3 className="mb-2 font-semibold">Widget 2</h3>
								<p className="text-3xl">$45,678</p>
								<p className="text-gray-600 text-sm dark:text-gray-400">
									Revenue
								</p>
							</div>
							<div className="rounded bg-purple-50 p-4 dark:bg-purple-900">
								<h3 className="mb-2 font-semibold">Widget 3</h3>
								<p className="text-3xl">89%</p>
								<p className="text-gray-600 text-sm dark:text-gray-400">
									Satisfaction
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Centered with Gutters */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Centered with Gutters</h3>
					<div className="rounded bg-gray-100 dark:bg-gray-800">
						<main className="center-lg center-gutter-4">
							<h1 className="mb-4 font-bold text-xl">Page with Gutters</h1>
							<p className="mb-4">
								This content has padding on the sides (gutters) to prevent it
								from touching the viewport edges on small screens. The
								center-gutter-4 utility adds 1rem of horizontal padding.
							</p>
							<p>
								Gutters are essential for mobile-friendly layouts, ensuring
								content remains readable and doesn't feel cramped against the
								screen edges.
							</p>
						</main>
					</div>
				</div>

				{/* Intrinsically Centered Card */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Intrinsically Centered Card
					</h3>
					<div className="rounded bg-gray-50 p-8 dark:bg-gray-900">
						<div className="center-intrinsic">
							<div className="rounded bg-white p-6 shadow-lg dark:bg-gray-800">
								<h2 className="mb-3 font-semibold">Natural Width Card</h2>
								<p className="mb-4">
									This card is centered based on its content width.
								</p>
								<button
									type="button"
									className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
								>
									Action Button
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Centered Text Block */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Centered Text Block</h3>
					<section className="center-md center-text rounded bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-blue-900 dark:to-purple-900">
						<h2 className="mb-4 font-bold text-2xl">Centered Heading</h2>
						<p className="mb-4">
							This text is both container-centered and text-aligned center,
							creating a symmetrical, focused presentation.
						</p>
						<button
							type="button"
							className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
						>
							Centered Button
						</button>
					</section>
				</div>

				{/* Full Width with Gutters */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Full Width with Gutters
					</h3>
					<div className="center-full center-gutter-8 rounded bg-yellow-50 dark:bg-yellow-900">
						<p className="font-semibold">
							Full width content with generous 2rem padding on the sides.
						</p>
						<p className="text-sm">
							This spans the full available width while maintaining comfortable
							spacing from edges.
						</p>
					</div>
				</div>

				{/* Narrow Content Column */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Narrow Content Column (Form)
					</h3>
					<div className="center-sm rounded bg-white p-6 shadow-md dark:bg-gray-800">
						<form className="space-y-4">
							<h2 className="mb-4 font-bold text-xl">Newsletter Signup</h2>
							<div>
								<label htmlFor={useId()} className="mb-1 block text-sm">
									Email
								</label>
								<input
									id={useId()}
									type="email"
									className="w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="your@email.com"
								/>
							</div>
							<button
								type="button"
								className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Article Layout */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Article Layout</h3>
					<article className="center center-gutter-4 stack-v-4 rounded bg-white p-8 shadow-lg dark:bg-gray-800">
						<header>
							<h1 className="mb-2 font-bold text-3xl">The Art of Typography</h1>
							<p className="text-gray-600 dark:text-gray-400">
								Published on January 1, 2024
							</p>
						</header>
						<div className="space-y-4">
							<p>
								Typography is the art and technique of arranging type to make
								written language legible, readable, and appealing when
								displayed. The arrangement of type involves selecting typefaces,
								point sizes, line lengths, line-spacing, and letter-spacing.
							</p>
							<p>
								The center utility with its default 65ch max-width ensures
								optimal line length for reading. Research shows that the ideal
								line length for body text is between 45-75 characters, including
								spaces and punctuation.
							</p>
							<blockquote className="border-blue-500 border-l-4 pl-4 italic">
								"Good typography is invisible; bad typography is everywhere."
							</blockquote>
							<p>
								By constraining the width of text blocks, we improve readability
								and reduce eye strain, making it easier for readers to track
								from one line to the next.
							</p>
						</div>
						<footer className="mt-6 border-t pt-4">
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Written by Design Team
							</p>
						</footer>
					</article>
				</div>

				{/* Landing Page Hero */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Landing Page Hero</h3>
					<section className="center-4xl center-text rounded bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
						<h1 className="mb-4 font-bold text-5xl">Welcome to Our Product</h1>
						<p className="mb-8 text-xl">
							The perfect solution for your business needs
						</p>
						<div className="flex justify-center gap-4">
							<button
								type="button"
								className="rounded bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100"
							>
								Get Started
							</button>
							<button
								type="button"
								className="rounded border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
							>
								Learn More
							</button>
						</div>
					</section>
				</div>

				{/* Documentation Layout */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Documentation Layout</h3>
					<div className="center-3xl center-gutter-6 rounded bg-gray-50 p-8 dark:bg-gray-900">
						<nav className="mb-6 rounded bg-white p-4 dark:bg-gray-800">
							<h3 className="mb-3 font-semibold">Table of Contents</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="/" className="text-blue-600 hover:underline">
										1. Introduction
									</a>
								</li>
								<li>
									<a href="/" className="text-blue-600 hover:underline">
										2. Getting Started
									</a>
								</li>
								<li>
									<a href="/" className="text-blue-600 hover:underline">
										3. API Reference
									</a>
								</li>
								<li>
									<a href="/" className="text-blue-600 hover:underline">
										4. Examples
									</a>
								</li>
							</ul>
						</nav>
						<main className="stack-v-8">
							<section className="rounded bg-white p-6 dark:bg-gray-800">
								<h2 className="mb-4 font-bold text-xl">Getting Started</h2>
								<p>
									Documentation content goes here with optimal width for
									reading...
								</p>
							</section>
							<section className="rounded bg-white p-6 dark:bg-gray-800">
								<h2 className="mb-4 font-bold text-xl">API Reference</h2>
								<p>More documentation with consistent width and spacing...</p>
							</section>
						</main>
					</div>
				</div>

				{/* Responsive Center */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Responsive Center</h3>
					<div className="center-sm md:center-lg xl:center-4xl rounded bg-gradient-to-r from-green-50 to-blue-50 p-6 dark:from-green-900 dark:to-blue-900">
						<h2 className="mb-4 font-bold text-xl">
							Responsive Width Container
						</h2>
						<p className="mb-4">
							This container changes its max-width at different breakpoints:
						</p>
						<ul className="space-y-1 text-sm">
							<li>• Mobile: center-sm (24rem max-width)</li>
							<li>• Tablet: center-lg (32rem max-width)</li>
							<li>• Desktop: center-4xl (56rem max-width)</li>
						</ul>
						<p className="mt-4 text-sm italic">
							Resize your browser to see the width change!
						</p>
					</div>
				</div>

				{/* Combined with Other Utilities */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Combined with Stack</h3>
					<div className="center-lg stack-v-6 rounded bg-white p-8 shadow-md dark:bg-gray-800">
						<h1 className="font-bold text-2xl">Stacked and Centered</h1>
						<p>
							First paragraph with automatic spacing from the stack utility.
						</p>
						<p>Second paragraph maintaining consistent vertical rhythm.</p>
						<p>Third paragraph completing the centered, stacked layout.</p>
						<button
							type="button"
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						>
							Call to Action
						</button>
					</div>
				</div>

				{/* Card Grid Container */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Card Grid Container</h3>
					<div className="center-6xl center-gutter-4">
						<h2 className="mb-4 font-bold text-xl">Featured Products</h2>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							<div className="rounded bg-white p-4 shadow dark:bg-gray-800">
								<div className="mb-3 h-32 rounded bg-gray-200 dark:bg-gray-700"></div>
								<h3 className="font-semibold">Product 1</h3>
								<p className="text-gray-600 text-sm dark:text-gray-400">
									Description
								</p>
							</div>
							<div className="rounded bg-white p-4 shadow dark:bg-gray-800">
								<div className="mb-3 h-32 rounded bg-gray-200 dark:bg-gray-700"></div>
								<h3 className="font-semibold">Product 2</h3>
								<p className="text-gray-600 text-sm dark:text-gray-400">
									Description
								</p>
							</div>
							<div className="rounded bg-white p-4 shadow dark:bg-gray-800">
								<div className="mb-3 h-32 rounded bg-gray-200 dark:bg-gray-700"></div>
								<h3 className="font-semibold">Product 3</h3>
								<p className="text-gray-600 text-sm dark:text-gray-400">
									Description
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="mt-12 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
				<h3 className="mb-4 font-bold text-xl">Center Usage Guide</h3>
				<div className="space-y-3">
					<div>
						<h4 className="font-semibold">Basic Usage:</h4>
						<code className="mt-1 block rounded bg-white p-2 text-sm dark:bg-gray-800">
							&lt;div className="center"&gt;...&lt;/div&gt;
						</code>
					</div>
					<div>
						<h4 className="font-semibold">Container Size Classes:</h4>
						<ul className="mt-2 grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center
								</code>{" "}
								- 65ch
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-xs
								</code>{" "}
								- 20rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-sm
								</code>{" "}
								- 24rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-md
								</code>{" "}
								- 28rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-lg
								</code>{" "}
								- 32rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-xl
								</code>{" "}
								- 36rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-3xl
								</code>{" "}
								- 48rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-6xl
								</code>{" "}
								- 72rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-full
								</code>{" "}
								- 100%
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold">Modifiers:</h4>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-text
								</code>{" "}
								- Centers text alignment
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-intrinsic
								</code>{" "}
								- Centers based on content width
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									center-gutter-*
								</code>{" "}
								- Adds horizontal padding
							</li>
						</ul>
					</div>
					<div className="mt-4 rounded bg-yellow-50 p-3 dark:bg-yellow-900">
						<h4 className="mb-2 font-semibold">💡 Key Benefits</h4>
						<ul className="space-y-1 text-sm">
							<li>• Maintains optimal reading line lengths</li>
							<li>• Automatic horizontal centering</li>
							<li>• Supports RTL languages with logical properties</li>
							<li>• Content-box sizing for precise control</li>
							<li>• Works great with responsive design</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
