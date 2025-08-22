import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cluster")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="stack-v-8 box-4 inset-0 mx-auto flex flex-col justify-center [--border-width:8px]">
			<div role="list" className="cluster">
				<div role="listitem" className="box-2">
					Some Item 1
				</div>
				<div role="listitem" className="box-2">
					Some Item 2
				</div>
				<div role="listitem" className="box-2">
					Some Item 3
				</div>
				<div role="listitem" className="box-2">
					Some Item 4
				</div>
				<div role="listitem" className="box-2">
					Some Item 5
				</div>
				<div role="listitem" className="box-2">
					Some Item 6
				</div>
				<div role="listitem" className="box-2">
					Some Item 7
				</div>
				<div role="listitem" className="box-2">
					Some Item 8
				</div>
			</div>
		</div>
	);
}
