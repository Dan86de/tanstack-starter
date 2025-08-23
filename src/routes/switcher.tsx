import { createFileRoute } from "@tanstack/react-router";
import { SwitcherDemo } from "~/components/switcher-demo/SwitcherDemo";

export const Route = createFileRoute("/switcher")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<SwitcherDemo/>
	);
}
