import { createFileRoute } from "@tanstack/react-router";
import { CenterDemo } from "~/components/center-demo/CenterDemo";

export const Route = createFileRoute("/center")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<CenterDemo />
	);
}
