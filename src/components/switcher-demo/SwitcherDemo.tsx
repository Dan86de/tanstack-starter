export function SwitcherDemo() {
	return (
		<div className="space-y-12 p-8">
			<section>
				<h2 className="mb-6 font-bold text-2xl">Switcher Layout Demos</h2>
				<p className="mb-8 text-gray-600 dark:text-gray-400">
					The Switcher component automatically switches between horizontal and vertical layouts based on container width.
					When the container is wide enough, items lay out horizontally. When space is constrained, they stack vertically.
				</p>

				{/* Simple Test - Resize browser to see the switch */}
				<div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
					<h3 className="mb-3 font-semibold text-lg">🧪 Quick Test - Resize Your Browser</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						The boxes below should switch from horizontal to vertical layout as you resize. Currently using a 30rem threshold.
					</p>
					<div className="switcher-md switcher-gap-4">
						<div className="rounded bg-red-500 text-white p-8 text-center">
							<div className="text-2xl font-bold">Box 1</div>
							<div className="text-sm mt-2">I'm flexible!</div>
						</div>
						<div className="rounded bg-blue-500 text-white p-8 text-center">
							<div className="text-2xl font-bold">Box 2</div>
							<div className="text-sm mt-2">Watch me move!</div>
						</div>
						<div className="rounded bg-green-500 text-white p-8 text-center">
							<div className="text-2xl font-bold">Box 3</div>
							<div className="text-sm mt-2">Responsive!</div>
						</div>
					</div>
					<p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
						💡 Tip: If boxes are always stacked, make your browser wider. If always horizontal, make it narrower.
					</p>
				</div>

				{/* Basic Switcher */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Basic Switcher</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Resize the window to see the layout switch between horizontal and vertical.
					</p>
					<div className="switcher-md switcher-gap-4">
						<div className="rounded bg-blue-100 p-6 dark:bg-blue-900">
							<h4 className="font-semibold mb-2">Card 1</h4>
							<p className="text-sm">This card will stack vertically when space is limited.</p>
						</div>
						<div className="rounded bg-green-100 p-6 dark:bg-green-900">
							<h4 className="font-semibold mb-2">Card 2</h4>
							<p className="text-sm">All cards switch layout at the same breakpoint.</p>
						</div>
						<div className="rounded bg-purple-100 p-6 dark:bg-purple-900">
							<h4 className="font-semibold mb-2">Card 3</h4>
							<p className="text-sm">The switch happens automatically based on container width.</p>
						</div>
					</div>
				</div>

				{/* Different Thresholds */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Different Threshold Sizes</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Control when the switch happens with different threshold values.
					</p>

					<div className="space-y-4">
						<div>
							<h4 className="mb-2 font-medium text-sm">Small Threshold (20rem) - Switches early</h4>
							<div className="switcher-sm switcher-gap-4">
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 1</div>
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 2</div>
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 3</div>
							</div>
						</div>

						<div>
							<h4 className="mb-2 font-medium text-sm">Medium Threshold (30rem) - Default</h4>
							<div className="switcher-md switcher-gap-4">
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 1</div>
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 2</div>
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 3</div>
							</div>
						</div>

						<div>
							<h4 className="mb-2 font-medium text-sm">Large Threshold (40rem) - Switches later</h4>
							<div className="switcher-lg switcher-gap-4">
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 1</div>
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 2</div>
								<div className="rounded bg-gray-100 p-4 dark:bg-gray-800">Item 3</div>
							</div>
						</div>
					</div>
				</div>

				{/* With Limit */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Maximum Items Limit</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Use data-limit to force vertical layout when you have too many items.
					</p>

					<div className="space-y-4">
						<div>
							<h4 className="mb-2 font-medium text-sm">Limit: 3 - With 5 items (forces vertical)</h4>
							<div className="switcher-md switcher-gap-4" data-limit="3">
								<div className="rounded bg-orange-100 p-4 dark:bg-orange-900">Item 1</div>
								<div className="rounded bg-orange-100 p-4 dark:bg-orange-900">Item 2</div>
								<div className="rounded bg-orange-100 p-4 dark:bg-orange-900">Item 3</div>
								<div className="rounded bg-orange-100 p-4 dark:bg-orange-900">Item 4</div>
								<div className="rounded bg-orange-100 p-4 dark:bg-orange-900">Item 5</div>
							</div>
						</div>

						<div>
							<h4 className="mb-2 font-medium text-sm">Limit: 3 - With 3 items (can be horizontal)</h4>
							<div className="switcher-md switcher-gap-4" data-limit="3">
								<div className="rounded bg-teal-100 p-4 dark:bg-teal-900">Item 1</div>
								<div className="rounded bg-teal-100 p-4 dark:bg-teal-900">Item 2</div>
								<div className="rounded bg-teal-100 p-4 dark:bg-teal-900">Item 3</div>
							</div>
						</div>
					</div>
				</div>

				{/* Different Gap Sizes */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Different Gap Sizes</h3>
					<div className="space-y-4">
						<div>
							<h4 className="mb-2 font-medium text-sm">Small Gap (gap-2)</h4>
							<div className="switcher-md switcher-gap-2">
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Tight</div>
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Spacing</div>
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Layout</div>
							</div>
						</div>

						<div>
							<h4 className="mb-2 font-medium text-sm">Medium Gap (gap-4)</h4>
							<div className="switcher-md switcher-gap-4">
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Regular</div>
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Spacing</div>
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Layout</div>
							</div>
						</div>

						<div>
							<h4 className="mb-2 font-medium text-sm">Large Gap (gap-8)</h4>
							<div className="switcher-md switcher-gap-8">
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Wide</div>
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Spacing</div>
								<div className="rounded bg-indigo-100 p-4 dark:bg-indigo-900">Layout</div>
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Example */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Navigation Bar</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Perfect for responsive navigation that stacks on mobile.
					</p>
					<nav className="switcher-sm switcher-gap-2 rounded bg-gray-800 p-4 text-white">
						<a href="#" className="rounded px-4 py-2 hover:bg-gray-700 text-center">Home</a>
						<a href="#" className="rounded px-4 py-2 hover:bg-gray-700 text-center">Products</a>
						<a href="#" className="rounded px-4 py-2 hover:bg-gray-700 text-center">Services</a>
						<a href="#" className="rounded px-4 py-2 hover:bg-gray-700 text-center">About</a>
						<a href="#" className="rounded px-4 py-2 hover:bg-gray-700 text-center">Contact</a>
					</nav>
				</div>

				{/* Feature Cards */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Feature Cards</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Feature cards that adapt to available space.
					</p>
					<div className="switcher-lg switcher-gap-6" data-limit="3">
						<div className="stack-v-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
								<span className="text-xl">🚀</span>
							</div>
							<h3 className="font-semibold text-lg">Fast Performance</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Lightning-fast load times with optimized code and smart caching strategies.
							</p>
							<a href="#" className="text-blue-500 hover:underline text-sm">Learn more →</a>
						</div>
						<div className="stack-v-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
								<span className="text-xl">🔒</span>
							</div>
							<h3 className="font-semibold text-lg">Secure by Default</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Enterprise-grade security with end-to-end encryption and regular audits.
							</p>
							<a href="#" className="text-blue-500 hover:underline text-sm">Learn more →</a>
						</div>
						<div className="stack-v-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500 text-white">
								<span className="text-xl">⚡</span>
							</div>
							<h3 className="font-semibold text-lg">Easy Integration</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Simple API and comprehensive documentation for quick implementation.
							</p>
							<a href="#" className="text-blue-500 hover:underline text-sm">Learn more →</a>
						</div>
					</div>
				</div>

				{/* Pricing Cards */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Pricing Plans</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Responsive pricing cards that stack on smaller screens.
					</p>
					<div className="switcher-xl switcher-gap-6" data-limit="3">
						<div className="stack-v-6 rounded-lg border p-6 dark:border-gray-700">
							<div className="stack-v-2">
								<h3 className="font-bold text-xl">Starter</h3>
								<p className="text-3xl font-bold">$9<span className="text-base font-normal">/mo</span></p>
							</div>
							<ul className="stack-v-3 text-sm">
								<li>✓ Up to 10 projects</li>
								<li>✓ Basic support</li>
								<li>✓ 2GB storage</li>
							</ul>
							<button className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
								Get Started
							</button>
						</div>
						<div className="stack-v-6 rounded-lg border-2 border-blue-500 p-6 relative">
							<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded text-xs">
								POPULAR
							</span>
							<div className="stack-v-2">
								<h3 className="font-bold text-xl">Professional</h3>
								<p className="text-3xl font-bold">$29<span className="text-base font-normal">/mo</span></p>
							</div>
							<ul className="stack-v-3 text-sm">
								<li>✓ Unlimited projects</li>
								<li>✓ Priority support</li>
								<li>✓ 50GB storage</li>
								<li>✓ Advanced analytics</li>
							</ul>
							<button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
								Get Started
							</button>
						</div>
						<div className="stack-v-6 rounded-lg border p-6 dark:border-gray-700">
							<div className="stack-v-2">
								<h3 className="font-bold text-xl">Enterprise</h3>
								<p className="text-3xl font-bold">$99<span className="text-base font-normal">/mo</span></p>
							</div>
							<ul className="stack-v-3 text-sm">
								<li>✓ Everything in Pro</li>
								<li>✓ Dedicated support</li>
								<li>✓ Unlimited storage</li>
								<li>✓ Custom integrations</li>
								<li>✓ SLA guarantee</li>
							</ul>
							<button className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
								Contact Sales
							</button>
						</div>
					</div>
				</div>

				{/* Stats Dashboard */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Stats Dashboard</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Dashboard stats that reflow based on available space.
					</p>
					<div className="switcher-md switcher-gap-4" data-limit="4">
						<div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
							<p className="text-sm opacity-90">Total Users</p>
							<p className="text-3xl font-bold">12,543</p>
							<p className="text-xs opacity-75">+12% from last month</p>
						</div>
						<div className="rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
							<p className="text-sm opacity-90">Revenue</p>
							<p className="text-3xl font-bold">$48.2k</p>
							<p className="text-xs opacity-75">+23% from last month</p>
						</div>
						<div className="rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
							<p className="text-sm opacity-90">Active Projects</p>
							<p className="text-3xl font-bold">284</p>
							<p className="text-xs opacity-75">+5% from last month</p>
						</div>
						<div className="rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
							<p className="text-sm opacity-90">Conversion</p>
							<p className="text-3xl font-bold">3.24%</p>
							<p className="text-xs opacity-75">+0.8% from last month</p>
						</div>
					</div>
				</div>

				{/* Footer Links */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Footer Section</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Footer sections that adapt from columns to stacked layout.
					</p>
					<footer className="rounded-lg bg-gray-100 p-8 dark:bg-gray-900">
						<div className="switcher-lg switcher-gap-8" data-limit="4">
							<div className="stack-v-3">
								<h4 className="font-semibold">Product</h4>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Features</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Pricing</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Security</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Roadmap</a>
							</div>
							<div className="stack-v-3">
								<h4 className="font-semibold">Company</h4>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">About</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Blog</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Careers</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Press</a>
							</div>
							<div className="stack-v-3">
								<h4 className="font-semibold">Resources</h4>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Documentation</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">API Reference</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Guides</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Examples</a>
							</div>
							<div className="stack-v-3">
								<h4 className="font-semibold">Legal</h4>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Privacy</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Terms</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Cookie Policy</a>
								<a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">License</a>
							</div>
						</div>
					</footer>
				</div>

				{/* Form Layout */}
				<div className="mb-8">
					<h3 className="mb-3 font-semibold text-lg">Form with Switcher</h3>
					<p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
						Form fields that switch between side-by-side and stacked layout.
					</p>
					<form className="stack-v-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 max-w-2xl">
						<h4 className="font-semibold text-lg">Contact Information</h4>
						<div className="switcher-md switcher-gap-4">
							<div className="stack-v-2">
								<label htmlFor="first-name" className="text-sm font-medium">First Name</label>
								<input
									type="text"
									id="first-name"
									className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="John"
								/>
							</div>
							<div className="stack-v-2">
								<label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
								<input
									type="text"
									id="last-name"
									className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="Doe"
								/>
							</div>
						</div>
						<div className="switcher-md switcher-gap-4">
							<div className="stack-v-2">
								<label htmlFor="email" className="text-sm font-medium">Email</label>
								<input
									type="email"
									id="email"
									className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="john@example.com"
								/>
							</div>
							<div className="stack-v-2">
								<label htmlFor="phone" className="text-sm font-medium">Phone</label>
								<input
									type="tel"
									id="phone"
									className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
									placeholder="+1 (555) 000-0000"
								/>
							</div>
						</div>
						<div className="stack-v-2">
							<label htmlFor="message" className="text-sm font-medium">Message</label>
							<textarea
								id="message"
								rows={4}
								className="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
								placeholder="Your message..."
							/>
						</div>
						<div className="switcher-sm switcher-gap-4">
							<button type="submit" className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
								Send Message
							</button>
							<button type="reset" className="rounded border border-gray-300 px-6 py-2 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
								Clear Form
							</button>
						</div>
					</form>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="mt-12 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
				<h3 className="mb-4 font-bold text-xl">Switcher Usage Guide</h3>
				<div className="space-y-4">
					<div>
						<h4 className="font-semibold mb-2">Basic Usage:</h4>
						<code className="block rounded bg-white p-3 text-sm dark:bg-gray-800">
							&lt;div className="switcher-md switcher-gap-4"&gt;...&lt;/div&gt;
						</code>
					</div>

					<div>
						<h4 className="font-semibold mb-2">Threshold Classes:</h4>
						<ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-sm</code> - 20rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-md</code> - 30rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-lg</code> - 40rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-xl</code> - 50rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-2xl</code> - 60rem</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-2">Gap Classes (Using Tailwind Spacing Scale):</h4>
						<ul className="grid grid-cols-3 gap-2 text-sm md:grid-cols-5">
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-0</code> - 0</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-1</code> - 0.25rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-2</code> - 0.5rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-3</code> - 0.75rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-4</code> - 1rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-5</code> - 1.25rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-6</code> - 1.5rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-8</code> - 2rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-10</code> - 2.5rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-12</code> - 3rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-16</code> - 4rem</li>
							<li><code className="rounded bg-white px-2 py-1 dark:bg-gray-800">switcher-gap-20</code> - 5rem</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-2">Limiting Items:</h4>
						<code className="block rounded bg-white p-3 text-sm dark:bg-gray-800">
							&lt;div className="switcher-md" data-limit="3"&gt;...&lt;/div&gt;
						</code>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
							Forces vertical layout when more than 3 items are present
						</p>
					</div>

					<div className="mt-4 rounded bg-yellow-50 p-4 dark:bg-yellow-900">
						<h4 className="mb-2 font-semibold">💡 Key Benefits</h4>
						<ul className="space-y-1 text-sm">
							<li>• Container-query-like behavior without JavaScript</li>
							<li>• Automatic switching based on available space</li>
							<li>• No media queries needed</li>
							<li>• Works with any number of items</li>
							<li>• Maintains equal widths in horizontal layout</li>
							<li>• Predictable stacking behavior</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
