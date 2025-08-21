import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stack")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-lg mx-auto flex items-center justify-center h-screen">
			<div className="stack-v-2 w-full">
				<div className="bg-neutral-200 w-full h-10" />
				<div className="bg-neutral-200 w-full h-10" />
				<div className="bg-neutral-200 w-full h-10" />
			</div>
		</div>
	);
}
