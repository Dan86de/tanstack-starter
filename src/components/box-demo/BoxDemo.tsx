export function BoxDemo() {
	return (
		<div className="space-y-12 p-8">
			<section>
				<h2 className="mb-6 font-bold text-2xl">Box Layout Demos</h2>

				{/* Basic Box */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Basic Box</h3>
					<div className="box-4">
						<h4 className="mb-2 font-semibold">Simple Box</h4>
						<p>
							This is a basic box with consistent padding and a subtle border.
							The box utility provides a clean container for any content.
						</p>
					</div>
				</div>

				{/* Different Padding Sizes */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">
						Different Padding Sizes
					</h3>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="box-2">
							<h5 className="mb-1 font-semibold">Compact (box-2)</h5>
							<p className="text-sm">Minimal padding of 0.5rem</p>
						</div>
						<div className="box-4">
							<h5 className="mb-1 font-semibold">Standard (box-4)</h5>
							<p className="text-sm">Comfortable padding of 1rem</p>
						</div>
						<div className="box-8">
							<h5 className="mb-1 font-semibold">Spacious (box-8)</h5>
							<p className="text-sm">Generous padding of 2rem</p>
						</div>
					</div>
				</div>

				{/* Card Component */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Card Component</h3>
					<div className="grid gap-4 md:grid-cols-3">
						<article className="box-6">
							<div className="mb-4 h-32 rounded bg-gray-200 dark:bg-gray-700"></div>
							<h2 className="mb-2 font-semibold">Product Card</h2>
							<p className="mb-4 text-gray-600 text-sm dark:text-gray-400">
								Product description with generous padding for comfortable
								reading.
							</p>
							<button
								type="button"
								className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
							>
								Add to Cart
							</button>
						</article>
						<article className="box-6">
							<div className="mb-4 h-32 rounded bg-gray-200 dark:bg-gray-700"></div>
							<h2 className="mb-2 font-semibold">Another Product</h2>
							<p className="mb-4 text-gray-600 text-sm dark:text-gray-400">
								Consistent spacing and borders across all cards.
							</p>
							<button
								type="button"
								className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
							>
								Add to Cart
							</button>
						</article>
						<article className="box-6">
							<div className="mb-4 h-32 rounded bg-gray-200 dark:bg-gray-700"></div>
							<h2 className="mb-2 font-semibold">Third Product</h2>
							<p className="mb-4 text-gray-600 text-sm dark:text-gray-400">
								Box utility makes card layouts clean and uniform.
							</p>
							<button
								type="button"
								className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
							>
								Add to Cart
							</button>
						</article>
					</div>
				</div>

				{/* Inverted Alert Box */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Inverted Alert Box</h3>
					<div className="box-4 box-inverted">
						<strong className="mb-2 block">⚠️ Important Notice</strong>
						<p>
							This message stands out with inverted colors. The box-inverted
							modifier switches the background and text colors for emphasis.
						</p>
					</div>
				</div>

				{/* Nested Boxes */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Nested Boxes</h3>
					<div className="box-8">
						<h2 className="mb-4 font-bold text-xl">Parent Container</h2>
						<p className="mb-4">
							This is the parent box with generous padding (box-8).
						</p>
						<div className="box-4 box-inverted mb-4">
							<h3 className="mb-2 font-semibold">Nested Inverted Box</h3>
							<p className="text-sm">
								A nested box with different styling to create visual hierarchy.
							</p>
						</div>
						<div className="box-4">
							<h3 className="mb-2 font-semibold">Another Nested Box</h3>
							<p className="text-sm">
								Multiple nested boxes can create complex layouts.
							</p>
						</div>
					</div>
				</div>

				{/* Custom Border Width */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Custom Border Width</h3>
					<div className="grid gap-4 md:grid-cols-3">
						<div
							className="box-4"
							style={{ "--border-width": "1px" } as React.CSSProperties}
						>
							<p className="font-semibold">1px Border</p>
							<p className="text-sm">Default border width</p>
						</div>
						<div
							className="box-4"
							style={{ "--border-width": "2px" } as React.CSSProperties}
						>
							<p className="font-semibold">2px Border</p>
							<p className="text-sm">Medium emphasis</p>
						</div>
						<div
							className="box-4"
							style={{ "--border-width": "4px" } as React.CSSProperties}
						>
							<p className="font-semibold">4px Border</p>
							<p className="text-sm">Strong emphasis</p>
						</div>
					</div>
				</div>

				{/* Form Container */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Form Container</h3>
					<form className="box-8 max-w-md">
						<h2 className="mb-4 font-bold text-xl">Contact Form</h2>
						<div className="mb-4">
							<label className="mb-1 block font-medium text-sm">
								Name
								<input
									type="text"
									className="mt-1 w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="Your name"
								/>
							</label>
						</div>
						<div className="mb-4">
							<label className="mb-1 block font-medium text-sm">
								Email
								<input
									type="email"
									className="mt-1 w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="your@email.com"
								/>
							</label>
						</div>
						<div className="mb-4">
							<label className="mb-1 block font-medium text-sm">
								Message
								<textarea
									className="mt-1 w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									rows={4}
									placeholder="Your message"
								/>
							</label>
						</div>
						<button
							type="submit"
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						>
							Submit
						</button>
					</form>
				</div>

				{/* Alert Messages */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Alert Messages</h3>
					<div className="space-y-4">
						<div
							className="box-4 box-inverted"
							role="alert"
							style={
								{
									"--box-bg": "rgb(239 68 68)",
									"--box-color": "white",
								} as React.CSSProperties
							}
						>
							<strong>❌ Error</strong>
							<p className="mt-1 text-sm">
								Something went wrong. Please try again.
							</p>
						</div>
						<div
							className="box-4 box-inverted"
							role="alert"
							style={
								{
									"--box-bg": "rgb(245 158 11)",
									"--box-color": "white",
								} as React.CSSProperties
							}
						>
							<strong>⚠️ Warning</strong>
							<p className="mt-1 text-sm">
								Your session will expire in 5 minutes.
							</p>
						</div>
						<div
							className="box-4 box-inverted"
							role="alert"
							style={
								{
									"--box-bg": "rgb(34 197 94)",
									"--box-color": "white",
								} as React.CSSProperties
							}
						>
							<strong>✅ Success</strong>
							<p className="mt-1 text-sm">Your changes have been saved.</p>
						</div>
						<div
							className="box-4"
							role="alert"
							style={
								{
									"--box-bg": "rgb(219 234 254)",
									"--box-color": "rgb(30 64 175)",
								} as React.CSSProperties
							}
						>
							<strong>ℹ️ Information</strong>
							<p className="mt-1 text-sm">
								New features have been added to your account.
							</p>
						</div>
					</div>
				</div>

				{/* Code Block */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Code Block</h3>
					<pre
						className="box-4 overflow-x-auto"
						style={
							{
								"--box-bg": "#1e293b",
								"--box-color": "#e2e8f0",
							} as React.CSSProperties
						}
					>
						<code>{`function example() {
  const greeting = "Hello, World!";
  console.log(greeting);
  return greeting;
}`}</code>
					</pre>
				</div>

				{/* Combined with Stack */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Box with Stack</h3>
					<div className="box-6 stack-v-4">
						<h2 className="font-bold text-xl">Stacked Content in Box</h2>
						<p>
							First paragraph with automatic spacing from the stack utility.
						</p>
						<p>Second paragraph maintaining consistent vertical rhythm.</p>
						<p>Third paragraph showing how box and stack work together.</p>
						<button
							type="button"
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						>
							Action Button
						</button>
					</div>
				</div>

				{/* Combined with Cluster */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Box with Cluster</h3>
					<div className="box-4">
						<h3 className="mb-3 font-semibold">Actions</h3>
						<div className="cluster-2">
							<button
								type="button"
								className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								Edit
							</button>
							<button
								type="button"
								className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								Delete
							</button>
							<button
								type="button"
								className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								Share
							</button>
							<button
								type="button"
								className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								Archive
							</button>
						</div>
					</div>
				</div>

				{/* Hero Section */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Hero Section</h3>
					<section
						className="box-12"
						style={
							{
								"--box-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								"--box-color": "white",
							} as React.CSSProperties
						}
					>
						<h1 className="mb-4 font-bold text-4xl">Welcome to Our Platform</h1>
						<p className="mb-6 text-lg">
							Large padding creates breathing room for important content and
							makes hero sections stand out.
						</p>
						<button
							type="button"
							className="rounded bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-gray-100"
						>
							Call to Action
						</button>
					</section>
				</div>

				{/* Dashboard Widget */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Dashboard Widgets</h3>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="box-4">
							<h4 className="mb-2 font-semibold text-gray-600 text-sm dark:text-gray-400">
								Total Users
							</h4>
							<p className="font-bold text-3xl">1,234</p>
							<p className="text-green-600 text-sm">↑ 12% from last month</p>
						</div>
						<div className="box-4">
							<h4 className="mb-2 font-semibold text-gray-600 text-sm dark:text-gray-400">
								Revenue
							</h4>
							<p className="font-bold text-3xl">$45,678</p>
							<p className="text-green-600 text-sm">↑ 8% from last month</p>
						</div>
						<div className="box-4">
							<h4 className="mb-2 font-semibold text-gray-600 text-sm dark:text-gray-400">
								Active Sessions
							</h4>
							<p className="font-bold text-3xl">892</p>
							<p className="text-red-600 text-sm">↓ 3% from last hour</p>
						</div>
					</div>
				</div>

				{/* Testimonial */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Testimonial</h3>
					<blockquote className="box-8 box-inverted">
						<p className="mb-4 text-lg italic">
							"The box utility has transformed how we build UI components. It
							provides consistent spacing and borders without the complexity of
							custom CSS."
						</p>
						<footer>
							<cite className="not-italic">
								<strong>Jane Developer</strong>
								<span className="block text-sm opacity-75">
									Senior Frontend Engineer
								</span>
							</cite>
						</footer>
					</blockquote>
				</div>

				{/* Pricing Card */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Pricing Card</h3>
					<div
						className="box-6 max-w-sm"
						style={{ "--border-width": "2px" } as React.CSSProperties}
					>
						<div className="mb-4 text-center">
							<h3 className="mb-2 font-bold text-xl">Pro Plan</h3>
							<p className="font-bold text-4xl">
								$29<span className="text-gray-600 text-lg">/month</span>
							</p>
						</div>
						<ul className="mb-6 space-y-2">
							<li className="flex items-center">
								<span className="mr-2">✓</span> Unlimited projects
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span> Priority support
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span> Advanced analytics
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span> Custom integrations
							</li>
						</ul>
						<button
							type="button"
							className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
						>
							Get Started
						</button>
					</div>
				</div>

				{/* Feature Box */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Feature Boxes</h3>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="box-6">
							<div className="mb-3 inline-block rounded bg-blue-100 p-3 dark:bg-blue-900">
								<svg
									className="h-6 w-6 text-blue-600 dark:text-blue-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<title>Lightning</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 font-semibold">Lightning Fast</h3>
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Optimized performance for the best user experience.
							</p>
						</div>
						<div className="box-6">
							<div className="mb-3 inline-block rounded bg-green-100 p-3 dark:bg-green-900">
								<svg
									className="h-6 w-6 text-green-600 dark:text-green-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<title>Secure</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 font-semibold">Secure by Default</h3>
							<p className="text-gray-600 text-sm dark:text-gray-400">
								Built-in security features to protect your data.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="mt-12 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
				<h3 className="mb-4 font-bold text-xl">Box Usage Guide</h3>
				<div className="space-y-3">
					<div>
						<h4 className="font-semibold">Basic Usage:</h4>
						<code className="mt-1 block rounded bg-white p-2 text-sm dark:bg-gray-800">
							&lt;div className="box-4"&gt;...&lt;/div&gt;
						</code>
					</div>
					<div>
						<h4 className="font-semibold">Padding Classes:</h4>
						<ul className="mt-2 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-0
								</code>{" "}
								- No padding
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-1
								</code>{" "}
								- 0.25rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-2
								</code>{" "}
								- 0.5rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-4
								</code>{" "}
								- 1rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-6
								</code>{" "}
								- 1.5rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-8
								</code>{" "}
								- 2rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-12
								</code>{" "}
								- 3rem
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-16
								</code>{" "}
								- 4rem
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold">Modifiers:</h4>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									box-inverted
								</code>{" "}
								- Inverts color scheme (dark bg, light text)
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold">CSS Variables:</h4>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									--border-width
								</code>{" "}
								- Control border thickness
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									--box-color
								</code>{" "}
								- Text color
							</li>
							<li>
								<code className="rounded bg-white px-1 dark:bg-gray-800">
									--box-bg
								</code>{" "}
								- Background color
							</li>
						</ul>
					</div>
					<div className="mt-4 rounded bg-yellow-50 p-3 dark:bg-yellow-900">
						<h4 className="mb-2 font-semibold">💡 Key Benefits</h4>
						<ul className="space-y-1 text-sm">
							<li>• Consistent padding and borders</li>
							<li>• Easy to create cards and panels</li>
							<li>• Customizable through CSS variables</li>
							<li>• Works great with other layout utilities</li>
							<li>• Perfect for UI components</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
