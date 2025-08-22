import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/box")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto flex h-screen max-w-lg items-center justify-center">
			<div className="box-0 stack-v-2 w-xl items-center">
				<div className="box-0 box-inverted w-full text-center [--border-width:0px]">
					head
				</div>
				<div className="box-0 w-full text-center [--border-width:0px]">
					body
				</div>
			</div>
		</div>
	);
}
