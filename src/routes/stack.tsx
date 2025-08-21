import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stack")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-lg mx-auto flex items-center justify-center h-screen">
			<div className="stack-v-4 w-full">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
				</p>
			</div>
		</div>
	);
}
