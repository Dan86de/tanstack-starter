import { createFileRoute } from "@tanstack/react-router";
import { BoxDemo } from "~/components/box-demo/BoxDemo";

export const Route = createFileRoute("/box")({
	component: RouteComponent,
});

function RouteComponent() {
	return <BoxDemo />;
}
