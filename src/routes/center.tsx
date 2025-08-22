import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/center")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="inset-0 h-screen">
			{/* Basic centered container */}
			<div className="center">
				<p>Content centered with optimal reading width</p>
			</div>

			{/* Centered with custom max-width and gutters */}
			<div className="center-4xl center-gutter-4">
				<p>Wider content with padding on sides</p>
			</div>

			{/* Centered with text alignment */}
			<div className="center center-text">
				<h1>Centered Heading</h1>
				<p>Centered paragraph text</p>
			</div>

			{/* Intrinsic centering for variable-width children */}
			<div className="center center-intrinsic">
				<button>Short</button>
				<button>A much longer button</button>
			</div>

			{/* Combine utilities for complex layouts */}
			<article className="center-3xl center-gutter-6 center-text center-intrinsic">
				<h1>Article Title</h1>
				<p>Content that's fully centered</p>
			</article>
		</div>
	);
}
