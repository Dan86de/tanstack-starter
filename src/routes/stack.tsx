import { createFileRoute } from "@tanstack/react-router";
import { StackDemo } from "~/components/stack-demo/StackDemo";

export const Route = createFileRoute("/stack")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<StackDemo/>
	);
}
