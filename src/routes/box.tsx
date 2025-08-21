import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/box")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-lg mx-auto flex items-center justify-center h-screen">
			<div className="box-8 dark">
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
