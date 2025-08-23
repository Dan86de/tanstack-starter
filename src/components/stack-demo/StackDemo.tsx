import { useId } from "react";

export function StackDemo() {
	return (
		<div className="space-y-12 p-8">
			<section>
				<h2 className="mb-6 font-bold text-2xl">Stack Layout Demos</h2>

				{/* Basic Stack */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Basic Stack</h3>
					<div className="stack-v-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
						<h4 className="font-semibold">Section Title</h4>
						<p>First paragraph of content with consistent spacing.</p>
						<p>Second paragraph maintaining the same gap.</p>
						<p>Third paragraph completing the stack.</p>
					</div>
				</div>

				{/* Different Spacing Sizes */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Different Spacing Sizes
					</h3>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="stack-v-2 rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="font-semibold">Tight (stack-v-2)</h5>
							<p className="text-sm">Item 1</p>
							<p className="text-sm">Item 2</p>
							<p className="text-sm">Item 3</p>
						</div>
						<div className="stack-v-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="font-semibold">Standard (stack-v-4)</h5>
							<p className="text-sm">Item 1</p>
							<p className="text-sm">Item 2</p>
							<p className="text-sm">Item 3</p>
						</div>
						<div className="stack-v-8 rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="font-semibold">Loose (stack-v-8)</h5>
							<p className="text-sm">Item 1</p>
							<p className="text-sm">Item 2</p>
							<p className="text-sm">Item 3</p>
						</div>
					</div>
				</div>

				{/* Article Layout */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Article Layout</h3>
					<article className="stack-v-4 rounded bg-white p-6 shadow-md dark:bg-gray-800">
						<h1 className="font-bold text-2xl">Article Title</h1>
						<p className="text-gray-600 text-lg dark:text-gray-400">
							Introduction paragraph with larger text that sets the context for
							the article.
						</p>
						<p>
							First paragraph of body content. The stack utility ensures
							consistent spacing between all paragraphs without needing
							individual margin classes.
						</p>
						<p>
							Second paragraph continues the narrative. Notice how the spacing
							remains predictable and doesn't compound or collapse like
							traditional margins.
						</p>
						<blockquote className="border-blue-500 border-l-4 pl-4 italic">
							"A relevant quote that stands out from the regular content but
							maintains the same vertical rhythm."
						</blockquote>
						<p>
							Final paragraph wrapping up the article. The stack pattern makes
							it easy to add or remove content without adjusting spacing.
						</p>
					</article>
				</div>

				{/* Form Layout */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Form Layout</h3>
					<form className="stack-v-6 max-w-md rounded bg-white p-6 shadow-md dark:bg-gray-800">
						<div className="stack-v-2">
							<label htmlFor="name" className="font-medium">
								Name
							</label>
							<input
								type="text"
								id={useId()}
								className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
								placeholder="Enter your name"
							/>
						</div>
						<div className="stack-v-2">
							<label htmlFor="email" className="font-medium">
								Email
							</label>
							<input
								type="email"
								id={useId()}
								className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
								placeholder="Enter your email"
							/>
						</div>
						<div className="stack-v-2">
							<label htmlFor="message" className="font-medium">
								Message
							</label>
							<textarea
								id={useId()}
								rows={4}
								className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
								placeholder="Enter your message"
							/>
						</div>
						<button
							type="submit"
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Card Component */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Card Component</h3>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="stack-v-4 rounded bg-white p-4 shadow-md dark:bg-gray-800">
							<div className="h-32 rounded bg-gray-200 dark:bg-gray-700" />
							<h3 className="font-semibold">Card Title</h3>
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Card description text goes here with automatic spacing.
							</p>
							<button
								type="button"
								className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
							>
								Learn More
							</button>
						</div>
						<div className="stack-v-4 rounded bg-white p-4 shadow-md dark:bg-gray-800">
							<div className="h-32 rounded bg-gray-200 dark:bg-gray-700" />
							<h3 className="font-semibold">Another Card</h3>
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Different content but same spacing pattern throughout.
							</p>
							<button
								type="button"
								className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
							>
								Learn More
							</button>
						</div>
						<div className="stack-v-4 rounded bg-white p-4 shadow-md dark:bg-gray-800">
							<div className="h-32 rounded bg-gray-200 dark:bg-gray-700" />
							<h3 className="font-semibold">Third Card</h3>
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Consistent vertical rhythm across all cards.
							</p>
							<button
								type="button"
								className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
							>
								Learn More
							</button>
						</div>
					</div>
				</div>

				{/* Dashboard Section */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Dashboard Section</h3>
					<section className="stack-v-8 rounded bg-gray-50 p-6 dark:bg-gray-900">
						<header className="stack-v-2">
							<h2 className="font-bold text-xl">Dashboard Overview</h2>
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Last updated: 5 minutes ago
							</p>
						</header>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							<div className="rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="font-semibold">Widget 1</h4>
								<p className="text-2xl">42</p>
							</div>
							<div className="rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="font-semibold">Widget 2</h4>
								<p className="text-2xl">128</p>
							</div>
							<div className="rounded bg-white p-4 dark:bg-gray-800">
								<h4 className="font-semibold">Widget 3</h4>
								<p className="text-2xl">89</p>
							</div>
						</div>
						<footer>
							<button
								type="button"
								className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
							>
								Refresh Data
							</button>
						</footer>
					</section>
				</div>

				{/* Navigation Menu */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Navigation Menu</h3>
					<nav className="stack-v-1 w-48 rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<a
							href="/"
							className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Home
						</a>
						<a
							href="/products"
							className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Products
						</a>
						<a
							href="/about"
							className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							About
						</a>
						<a
							href="/contact"
							className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Contact
						</a>
					</nav>
				</div>

				{/* Alert Component */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Alert Component</h3>
					<div className="stack-v-3 rounded bg-yellow-50 p-4 dark:bg-yellow-900">
						<h4 className="font-semibold">⚠️ Important Notice</h4>
						<p>Your subscription is expiring soon.</p>
						<div className="flex gap-2">
							<button
								type="button"
								className="rounded bg-yellow-600 px-3 py-1 text-white hover:bg-yellow-700"
							>
								Renew Now
							</button>
							<button
								type="button"
								className="rounded border border-yellow-600 px-3 py-1 hover:bg-yellow-100 dark:hover:bg-yellow-800"
							>
								Remind Later
							</button>
						</div>
					</div>
				</div>

				{/* Blog Post Layout */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Blog Post Layout</h3>
					<article className="stack-v-6 rounded bg-white p-8 shadow-lg dark:bg-gray-800">
						<header className="stack-v-3">
							<h1 className="font-bold text-3xl">Blog Post Title</h1>
							<div className="flex gap-4 text-gray-600 text-sm dark:text-gray-400">
								<span>By Author Name</span>
								<time>March 15, 2024</time>
								<span>5 min read</span>
							</div>
						</header>

						<div className="stack-v-4">
							<p>
								Opening paragraph that introduces the topic and captures the
								reader's attention with compelling content.
							</p>
							<p>
								Body paragraph that develops the main ideas. The stack utility
								ensures consistent spacing throughout the article.
							</p>
							<h2 className="font-bold text-xl">Subheading</h2>
							<p>
								More content under the subheading, maintaining the same vertical
								rhythm established by the stack pattern.
							</p>
						</div>

						<footer className="stack-v-4">
							<div className="flex gap-2">
								<span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
									JavaScript
								</span>
								<span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
									React
								</span>
								<span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
									Tutorial
								</span>
							</div>
							<div className="flex gap-2">
								<button
									type="button"
									className="rounded border px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
								>
									Share
								</button>
								<button
									type="button"
									className="rounded border px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
								>
									Save
								</button>
							</div>
						</footer>
					</article>
				</div>

				{/* Settings Panel */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Settings Panel</h3>
					<div className="stack-v-6 max-w-md rounded bg-white p-6 shadow-md dark:bg-gray-800">
						<h2 className="font-bold text-xl">Settings</h2>

						<section className="stack-v-4">
							<h3 className="font-semibold">Profile</h3>
							<label className="stack-v-2">
								<span className="font-medium text-sm">Display Name</span>
								<input
									type="text"
									className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
								/>
							</label>
							<label className="stack-v-2">
								<span className="font-medium text-sm">Bio</span>
								<textarea
									className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									rows={3}
								/>
							</label>
						</section>

						<section className="stack-v-4">
							<h3 className="font-semibold">Preferences</h3>
							<label className="flex items-center gap-2">
								<input type="checkbox" />
								<span>Email notifications</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="checkbox" />
								<span>Dark mode</span>
							</label>
						</section>

						<button
							type="button"
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						>
							Save Changes
						</button>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">FAQ Section</h3>
					<section className="stack-v-8 rounded bg-gray-50 p-6 dark:bg-gray-900">
						<h2 className="font-bold text-xl">Frequently Asked Questions</h2>

						<details className="stack-v-2 rounded bg-white p-4 dark:bg-gray-800">
							<summary className="cursor-pointer font-medium">
								What is the return policy?
							</summary>
							<p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
								Our return policy allows returns within 30 days of purchase with
								original receipt.
							</p>
						</details>

						<details className="stack-v-2 rounded bg-white p-4 dark:bg-gray-800">
							<summary className="cursor-pointer font-medium">
								How long does shipping take?
							</summary>
							<p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
								Standard shipping takes 5-7 business days. Express shipping
								available for 2-3 days.
							</p>
						</details>

						<details className="stack-v-2 rounded bg-white p-4 dark:bg-gray-800">
							<summary className="cursor-pointer font-medium">
								Do you ship internationally?
							</summary>
							<p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
								Yes, we ship to most countries worldwide. International shipping
								takes 10-14 days.
							</p>
						</details>
					</section>
				</div>

				{/* Responsive Stack */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Responsive Stack</h3>
					<div className="stack-v-4 md:stack-v-6 lg:stack-v-8 rounded bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:from-purple-900 dark:to-pink-900">
						<h1 className="font-bold text-2xl">Responsive Stack</h1>
						<p>
							This stack has different spacing at different breakpoints. On
							mobile, the gap is smaller (stack-v-4).
						</p>
						<p>On medium screens, the gap increases (stack-v-6).</p>
						<p>On large screens, the gap is even larger (stack-v-8).</p>
						<div className="rounded bg-white/50 p-3 dark:bg-black/20">
							<p className="text-sm">
								Resize your browser to see the spacing change!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="mt-12 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
				<h3 className="mb-4 font-bold text-xl">Stack Usage Guide</h3>
				<div className="space-y-3">
					<div>
						<h4 className="font-semibold">Basic Usage:</h4>
						<code className="mt-1 block rounded bg-white p-2 text-sm dark:bg-gray-800">
							&lt;div className="stack-v-4"&gt;...&lt;/div&gt;
						</code>
					</div>
					<div>
						<h4 className="font-semibold">Available Spacing Classes:</h4>
						<ul className="mt-2 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-0
								</code>{" "}
								- No gap
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-0.5
								</code>{" "}
								- 0.125rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-1
								</code>{" "}
								- 0.25rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-2
								</code>{" "}
								- 0.5rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-3
								</code>{" "}
								- 0.75rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-4
								</code>{" "}
								- 1rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-6
								</code>{" "}
								- 1.5rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									stack-v-8
								</code>{" "}
								- 2rem
							</li>
						</ul>
					</div>
					<div className="mt-4 rounded bg-yellow-50 p-3 dark:bg-yellow-900">
						<h4 className="mb-2 font-semibold">💡 Key Benefits</h4>
						<ul className="space-y-1 text-sm">
							<li>• No margin collapse issues</li>
							<li>• Consistent spacing between all children</li>
							<li>• No need for :first-child or :last-child selectors</li>
							<li>• Works with any HTML elements</li>
							<li>• Responsive with breakpoint modifiers</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
