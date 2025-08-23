export function ClusterDemo() {
	return (
		<div className="space-y-12 p-8">
			<section>
				<h2 className="mb-6 font-bold text-2xl">Cluster Layout Demos</h2>

				{/* Basic Cluster */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Basic Cluster</h3>
					<div className="cluster-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
						<button
							type="button"
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						>
							Save
						</button>
						<button
							type="button"
							className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
						>
							Edit
						</button>
						<button
							type="button"
							className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
						>
							Delete
						</button>
					</div>
				</div>

				{/* Different Gap Sizes */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Different Gap Sizes</h3>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">Tight (cluster-1)</h5>
							<div className="cluster-1">
								<span className="rounded bg-blue-100 px-2 py-1 text-sm dark:bg-blue-900">
									Item 1
								</span>
								<span className="rounded bg-blue-100 px-2 py-1 text-sm dark:bg-blue-900">
									Item 2
								</span>
								<span className="rounded bg-blue-100 px-2 py-1 text-sm dark:bg-blue-900">
									Item 3
								</span>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">Standard (cluster-4)</h5>
							<div className="cluster-4">
								<span className="rounded bg-green-100 px-2 py-1 text-sm dark:bg-green-900">
									Item 1
								</span>
								<span className="rounded bg-green-100 px-2 py-1 text-sm dark:bg-green-900">
									Item 2
								</span>
								<span className="rounded bg-green-100 px-2 py-1 text-sm dark:bg-green-900">
									Item 3
								</span>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">Loose (cluster-6)</h5>
							<div className="cluster-6">
								<span className="rounded bg-purple-100 px-2 py-1 text-sm dark:bg-purple-900">
									Item 1
								</span>
								<span className="rounded bg-purple-100 px-2 py-1 text-sm dark:bg-purple-900">
									Item 2
								</span>
								<span className="rounded bg-purple-100 px-2 py-1 text-sm dark:bg-purple-900">
									Item 3
								</span>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">Extra Loose (cluster-8)</h5>
							<div className="cluster-8">
								<span className="rounded bg-orange-100 px-2 py-1 text-sm dark:bg-orange-900">
									Item 1
								</span>
								<span className="rounded bg-orange-100 px-2 py-1 text-sm dark:bg-orange-900">
									Item 2
								</span>
								<span className="rounded bg-orange-100 px-2 py-1 text-sm dark:bg-orange-900">
									Item 3
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Menu */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Navigation Menu</h3>
					<nav className="cluster-6 rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<a href="/" className="hover:text-blue-600">
							Home
						</a>
						<a href="/about" className="hover:text-blue-600">
							About
						</a>
						<a href="/services" className="hover:text-blue-600">
							Services
						</a>
						<a href="/contact" className="hover:text-blue-600">
							Contact
						</a>
					</nav>
				</div>

				{/* Tag List */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Tag List</h3>
					<div className="cluster-2 rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							JavaScript
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							React
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							Node.js
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							TypeScript
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							CSS
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							HTML
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							Vue
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							Angular
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
							Svelte
						</span>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Social Media Icons</h3>
					<div className="cluster-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
						<a
							href="/"
							aria-label="Facebook"
							className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700"
						>
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<title>Facebook</title>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</a>
						<a
							href="/"
							aria-label="Twitter"
							className="rounded-full bg-blue-400 p-2 text-white hover:bg-blue-500"
						>
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<title>Twitter</title>
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
							</svg>
						</a>
						<a
							href="/"
							aria-label="LinkedIn"
							className="rounded-full bg-blue-700 p-2 text-white hover:bg-blue-800"
						>
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<title>LinkedIn</title>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<a
							href="/"
							aria-label="GitHub"
							className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-900"
						>
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<title>GitHub</title>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</div>
				</div>

				{/* Form Actions */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Form Actions</h3>
					<form className="rounded bg-white p-6 shadow-md dark:bg-gray-800">
						<div className="mb-4">
							<input
								type="text"
								placeholder="Enter some text..."
								className="w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
							/>
						</div>
						<div className="cluster-4">
							<button
								type="submit"
								className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
							>
								Submit
							</button>
							<button
								type="reset"
								className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
							>
								Reset
							</button>
							<a
								href="/cancel"
								className="rounded border border-gray-400 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								Cancel
							</a>
						</div>
					</form>
				</div>

				{/* Pagination */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Pagination</h3>
					<div className="cluster-1 rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<button
							type="button"
							className="rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Previous
						</button>
						<button
							type="button"
							className="rounded bg-blue-500 px-3 py-1 text-white"
						>
							1
						</button>
						<button
							type="button"
							className="rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							2
						</button>
						<button
							type="button"
							className="rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							3
						</button>
						<button
							type="button"
							className="rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							4
						</button>
						<button
							type="button"
							className="rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							5
						</button>
						<button
							type="button"
							className="rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Next
						</button>
					</div>
				</div>

				{/* Breadcrumb Navigation */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Breadcrumb Navigation</h3>
					<nav
						aria-label="Breadcrumb"
						className="cluster-2 rounded bg-gray-50 p-4 dark:bg-gray-900"
					>
						<a href="/" className="text-blue-600 hover:underline">
							Home
						</a>
						<span className="text-gray-400">/</span>
						<a href="/products" className="text-blue-600 hover:underline">
							Products
						</a>
						<span className="text-gray-400">/</span>
						<span
							aria-current="page"
							className="text-gray-700 dark:text-gray-300"
						>
							Current Item
						</span>
					</nav>
				</div>

				{/* Card Actions */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Card Actions</h3>
					<article className="max-w-sm rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<h3 className="mb-2 font-semibold">Card Title</h3>
						<p className="mb-4 text-gray-600 dark:text-gray-400">
							Card content goes here with some descriptive text about the item.
						</p>
						<div className="cluster-3">
							<button
								type="button"
								className="flex items-center gap-1 rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								❤️ Like
							</button>
							<button
								type="button"
								className="flex items-center gap-1 rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								📤 Share
							</button>
							<button
								type="button"
								className="flex items-center gap-1 rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								💾 Save
							</button>
						</div>
					</article>
				</div>

				{/* Toolbar */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Toolbar</h3>
					<div className="cluster-2 rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<button
							type="button"
							aria-label="Bold"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<strong>B</strong>
						</button>
						<button
							type="button"
							aria-label="Italic"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<em>I</em>
						</button>
						<button
							type="button"
							aria-label="Underline"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<u>U</u>
						</button>
						<span className="text-gray-400">|</span>
						<button
							type="button"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Link
						</button>
						<button
							type="button"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Image
						</button>
						<button
							type="button"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							Code
						</button>
						<span className="text-gray-400">|</span>
						<button
							type="button"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							H1
						</button>
						<button
							type="button"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							H2
						</button>
						<button
							type="button"
							className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							H3
						</button>
					</div>
				</div>

				{/* Filter Pills */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Filter Pills</h3>
					<div className="cluster-2 rounded bg-gray-50 p-4 dark:bg-gray-900">
						<button
							type="button"
							className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white"
						>
							All Products
						</button>
						<button
							type="button"
							className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							Electronics
						</button>
						<button
							type="button"
							className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							Clothing
						</button>
						<button
							type="button"
							className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							Books
						</button>
						<button
							type="button"
							className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							Home & Garden
						</button>
						<button
							type="button"
							className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							Sports
						</button>
					</div>
				</div>

				{/* Icon and Text Combinations */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Icon and Text Combinations
					</h3>
					<div className="cluster-2 rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<div className="cluster-1">
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<title>Download</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							<span>Download</span>
						</div>
						<div className="cluster-1">
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<title>Print</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
								/>
							</svg>
							<span>Print</span>
						</div>
						<div className="cluster-1">
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<title>Share</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326"
								/>
							</svg>
							<span>Share</span>
						</div>
					</div>
				</div>

				{/* Alignment Variations */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Alignment Variations</h3>
					<div className="space-y-4">
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">
								Right-aligned (justify-end)
							</h5>
							<div className="cluster-4 justify-end">
								<button
									type="button"
									className="rounded bg-gray-500 px-3 py-1 text-white"
								>
									Save
								</button>
								<button type="button" className="rounded border px-3 py-1">
									Cancel
								</button>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">Centered (justify-center)</h5>
							<div className="cluster-4 justify-center">
								<a href="/" className="hover:underline">
									Previous
								</a>
								<span>Page 2 of 10</span>
								<a href="/" className="hover:underline">
									Next
								</a>
							</div>
						</div>
						<div className="rounded bg-gray-50 p-4 dark:bg-gray-900">
							<h5 className="mb-2 font-semibold">
								Space Between (justify-between)
							</h5>
							<div className="cluster-4 justify-between">
								<span>Showing 1-10 of 100</span>
								<div className="cluster-2">
									<button type="button" className="rounded border px-3 py-1">
										Previous
									</button>
									<button type="button" className="rounded border px-3 py-1">
										Next
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Header Navigation */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Header Navigation</h3>
					<header className="rounded bg-white p-4 shadow-md dark:bg-gray-800">
						<div className="cluster-6 justify-between">
							<div className="cluster-4">
								<a href="/" className="font-bold text-xl">
									Logo
								</a>
								<nav className="cluster-6">
									<a href="/products" className="hover:text-blue-600">
										Products
									</a>
									<a href="/about" className="hover:text-blue-600">
										About
									</a>
									<a href="/contact" className="hover:text-blue-600">
										Contact
									</a>
								</nav>
							</div>
							<div className="cluster-4">
								<button type="button" className="rounded border px-3 py-1">
									Sign In
								</button>
								<button
									type="button"
									className="rounded bg-blue-500 px-3 py-1 text-white"
								>
									Sign Up
								</button>
							</div>
						</div>
					</header>
				</div>

				{/* Footer Links */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Footer Links</h3>
					<footer className="rounded bg-gray-800 p-6 text-white">
						<div className="cluster-8">
							<div className="cluster-4">
								<a href="/privacy" className="hover:text-blue-400">
									Privacy
								</a>
								<a href="/terms" className="hover:text-blue-400">
									Terms
								</a>
								<a href="/cookies" className="hover:text-blue-400">
									Cookies
								</a>
							</div>
							<div className="cluster-4">
								<a href="/facebook" className="hover:text-blue-400">
									Facebook
								</a>
								<a href="/twitter" className="hover:text-blue-400">
									Twitter
								</a>
								<a href="/instagram" className="hover:text-blue-400">
									Instagram
								</a>
							</div>
						</div>
					</footer>
				</div>

				{/* Responsive Cluster */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Responsive Cluster</h3>
					<div className="cluster-2 md:cluster-4 lg:cluster-6 rounded bg-gradient-to-br from-blue-50 to-purple-50 p-4 dark:from-blue-900 dark:to-purple-900">
						<button
							type="button"
							className="rounded bg-white px-3 py-1 shadow dark:bg-gray-800"
						>
							Button 1
						</button>
						<button
							type="button"
							className="rounded bg-white px-3 py-1 shadow dark:bg-gray-800"
						>
							Button 2
						</button>
						<button
							type="button"
							className="rounded bg-white px-3 py-1 shadow dark:bg-gray-800"
						>
							Button 3
						</button>
						<button
							type="button"
							className="rounded bg-white px-3 py-1 shadow dark:bg-gray-800"
						>
							Button 4
						</button>
						<button
							type="button"
							className="rounded bg-white px-3 py-1 shadow dark:bg-gray-800"
						>
							Button 5
						</button>
						<p className="w-full text-center text-sm">
							Gap changes with screen size!
						</p>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="mt-12 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
				<h3 className="mb-4 font-bold text-xl">Cluster Usage Guide</h3>
				<div className="space-y-3">
					<div>
						<h4 className="font-semibold">Basic Usage:</h4>
						<code className="mt-1 block rounded bg-white p-2 text-sm dark:bg-gray-800">
							&lt;div className="cluster-4"&gt;...&lt;/div&gt;
						</code>
					</div>
					<div>
						<h4 className="font-semibold">Available Gap Classes:</h4>
						<ul className="mt-2 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster
								</code>{" "}
								- 1rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-0
								</code>{" "}
								- No gap
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-1
								</code>{" "}
								- 0.25rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-2
								</code>{" "}
								- 0.5rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-3
								</code>{" "}
								- 0.75rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-4
								</code>{" "}
								- 1rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-6
								</code>{" "}
								- 1.5rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									cluster-8
								</code>{" "}
								- 2rem
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold">Alignment Modifiers:</h4>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									justify-start
								</code>{" "}
								- Default left alignment
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									justify-end
								</code>{" "}
								- Right alignment
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									justify-center
								</code>{" "}
								- Center alignment
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									justify-between
								</code>{" "}
								- Space between items
							</li>
						</ul>
					</div>
					<div className="mt-4 rounded bg-yellow-50 p-3 dark:bg-yellow-900">
						<h4 className="mb-2 font-semibold">💡 Key Benefits</h4>
						<ul className="space-y-1 text-sm">
							<li>• Automatic wrapping when space constrained</li>
							<li>• Consistent gap between all items</li>
							<li>• No media queries needed for basic responsiveness</li>
							<li>• Perfect for navigation, buttons, and tags</li>
							<li>• Works with any number of items</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
