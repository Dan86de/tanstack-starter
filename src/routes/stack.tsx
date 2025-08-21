import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stack")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto flex h-screen max-w-lg items-center justify-center">
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
