import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/center")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="stack-v-8 inset-0 h-screen">
			{/* Basic centered container */}
			<div className="center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
			</div>

			{/* Centered with custom max-width and gutters */}
			<div className="center-4xl center-gutter-4">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
			</div>

			{/* Centered with text alignment */}
			<div className="center center-text">
				<h1>Centered Heading</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
			</div>

			{/* Intrinsic centering for variable-width children */}
			<div className="center center-intrinsic stack-v-2">
				<button className="box-2 cursor-pointer transition-all duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
					Short
				</button>
				<button className="box-2 cursor-pointer transition-all duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
					A much longer button
				</button>
			</div>

			{/* Combine utilities for complex layouts */}
			<article className="center-3xl center-gutter-6 center-text center-intrinsic">
				<h1>Article Title</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
			</article>
		</div>
	);
}
