export function SidebarDemo() {
	return (
		<div className="space-y-12 p-8">
			<section>
				<h2 className="mb-6 font-bold text-2xl">Sidebar Layout Demos</h2>

				{/* Basic Left Sidebar */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Basic Left Sidebar</h3>
					<div className="sidebar-left sidebar-gap-4 sidebar-w-sm">
						<aside className="rounded bg-gray-100 p-4 dark:bg-gray-800">
							<h4 className="mb-2 font-semibold">Sidebar</h4>
							<nav className="space-y-2">
								<a href="/" className="block hover:text-blue-600">
									Link 1
								</a>
								<a href="/" className="block hover:text-blue-600">
									Link 2
								</a>
								<a href="/" className="block hover:text-blue-600">
									Link 3
								</a>
							</nav>
						</aside>
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Main Content</h4>
							<p>
								This is the main content area. When the viewport is wide enough,
								the sidebar appears on the left with a fixed width. When space
								is constrained, the layout stacks vertically.
							</p>
						</main>
					</div>
				</div>

				{/* Right Sidebar */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Right Sidebar</h3>
					<div className="sidebar-right sidebar-gap-4 sidebar-w-md">
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Main Content</h4>
							<p>
								In this configuration, the sidebar appears on the right side.
								The content area still takes up the remaining space and both
								elements stack when needed.
							</p>
						</main>
						<aside className="rounded bg-gray-100 p-4 dark:bg-gray-800">
							<h4 className="mb-2 font-semibold">Right Sidebar</h4>
							<div className="space-y-2">
								<div className="rounded bg-white p-2 dark:bg-gray-700">
									Widget 1
								</div>
								<div className="rounded bg-white p-2 dark:bg-gray-700">
									Widget 2
								</div>
								<div className="rounded bg-white p-2 dark:bg-gray-700">
									Widget 3
								</div>
							</div>
						</aside>
					</div>
				</div>

				{/* Sidebar with custom gap */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Custom Gap Sidebar</h3>
					<div className="sidebar-left sidebar-gap-8 sidebar-w-lg">
						<aside className="rounded bg-blue-50 p-4 dark:bg-blue-900">
							<h4 className="mb-2 font-semibold">Wide Gap Sidebar</h4>
							<p>This sidebar has a larger gap between elements</p>
						</aside>
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Content Area</h4>
							<p>
								Notice the increased spacing between the sidebar and content
								areas. This is achieved using the sidebar-gap-8 utility.
							</p>
						</main>
					</div>
				</div>

				{/* Sidebar with different content minimum */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Sidebar with 75% Content Minimum
					</h3>
					<div className="sidebar-left sidebar-gap-4 sidebar-w-xs sidebar-content-min-3-4">
						<aside className="rounded bg-purple-50 p-4 dark:bg-purple-900">
							<h4 className="mb-2 font-semibold">Narrow Sidebar</h4>
							<p className="text-sm">Breaks earlier</p>
						</aside>
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Wider Content Minimum</h4>
							<p>
								This content area requires at least 75% of the container width
								before it will sit alongside the sidebar. This causes the layout
								to stack sooner than the default 50% minimum.
							</p>
						</main>
					</div>
				</div>

				{/* No Stretch Sidebar */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">No Stretch Sidebar</h3>
					<div className="sidebar-left sidebar-gap-4 sidebar-w-sm sidebar-no-stretch">
						<aside className="rounded bg-green-50 p-4 dark:bg-green-900">
							<h4 className="mb-2 font-semibold">Natural Height</h4>
							<p>Short content</p>
						</aside>
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Natural Height Content</h4>
							<p>
								With the sidebar-no-stretch utility, elements adopt their
								natural height instead of stretching to match each other. This
								is useful when you don't want equal height columns.
							</p>
							<p className="mt-2">
								Notice how the sidebar doesn't stretch to match this taller
								content area.
							</p>
						</main>
					</div>
				</div>

				{/* Fractional Width Sidebar */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">1/3 Width Sidebar</h3>
					<div className="sidebar-left sidebar-gap-4 sidebar-w-1-3">
						<aside className="rounded bg-yellow-50 p-4 dark:bg-yellow-900">
							<h4 className="mb-2 font-semibold">1/3 Width</h4>
							<p>
								This sidebar takes up 1/3 of the container width when not
								stacked
							</p>
						</aside>
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">2/3 Width Content</h4>
							<p>
								The content area automatically takes up the remaining 2/3 of the
								space, creating a nice proportional layout.
							</p>
						</main>
					</div>
				</div>

				{/* Combined Modifiers Example */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Combined Modifiers</h3>
					<div className="sidebar-right sidebar-gap-6 sidebar-w-2xl sidebar-content-min-2-3 sidebar-no-stretch">
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Complex Configuration</h4>
							<p>This example combines multiple modifiers:</p>
							<ul className="mt-2 list-inside list-disc space-y-1">
								<li>Right-aligned sidebar</li>
								<li>Gap of 6 spacing units</li>
								<li>2XL sidebar width</li>
								<li>Content requires 66.67% minimum width</li>
								<li>No vertical stretching</li>
							</ul>
						</main>
						<aside className="rounded bg-indigo-50 p-4 dark:bg-indigo-900">
							<h4 className="mb-2 font-semibold">Wide Sidebar</h4>
							<p>
								Extra wide sidebar content area for detailed information or
								controls
							</p>
						</aside>
					</div>
				</div>

				{/* Auto Width Sidebar */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Auto Width Sidebar</h3>
					<div className="sidebar-left sidebar-gap-4 sidebar-w-auto">
						<aside className="rounded bg-pink-50 p-4 dark:bg-pink-900">
							<h4 className="mb-2 font-semibold">Auto</h4>
							<p className="text-sm">Content-based width</p>
						</aside>
						<main className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h4 className="mb-2 font-semibold">Flexible Content</h4>
							<p>
								With sidebar-w-auto, the sidebar width is determined by its
								content rather than a fixed value.
							</p>
						</main>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="mt-12 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
				<h3 className="mb-4 font-bold text-xl">Usage Guide</h3>
				<div className="space-y-3">
					<div>
						<h4 className="font-semibold">Basic Usage:</h4>
						<code className="mt-1 block rounded bg-white p-2 text-sm dark:bg-gray-800">
							&lt;div className="sidebar-left sidebar-gap-4
							sidebar-w-sm"&gt;...&lt;/div&gt;
						</code>
					</div>
					<div>
						<h4 className="font-semibold">Available Utilities:</h4>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-left
								</code>{" "}
								/{" "}
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-right
								</code>{" "}
								- Sidebar position
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-gap-*
								</code>{" "}
								- Gap between elements (uses spacing scale)
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-w-*
								</code>{" "}
								- Sidebar width (xs, sm, md, lg, xl, 2xl, 3xl, auto)
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-w-1-4
								</code>
								,{" "}
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-w-1-3
								</code>
								,{" "}
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-w-1-2
								</code>
								,{" "}
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-w-2-3
								</code>
								,{" "}
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-w-3-4
								</code>{" "}
								- Fractional widths
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-content-min-*
								</code>{" "}
								- Minimum content width before stacking (1-4, 1-3, 1-2, 2-3,
								3-4)
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-no-stretch
								</code>{" "}
								- Disable equal height columns
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									sidebar-reverse
								</code>{" "}
								- Reverse the layout direction
							</li>
						</ul>
					</div>
					<div className="mt-4 rounded bg-yellow-50 p-3 dark:bg-yellow-900">
						<h4 className="mb-2 font-semibold">
							📝 Note on Fractional Classes
						</h4>
						<p className="text-sm">
							Fractional widths use hyphens instead of slashes to comply with
							Tailwind v4 naming rules:
						</p>
						<ul className="mt-2 space-y-1 font-mono text-sm">
							<li>
								✅ <code>sidebar-w-1-3</code> (33.33% width)
							</li>
							<li>
								✅ <code>sidebar-content-min-3-4</code> (75% minimum)
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
