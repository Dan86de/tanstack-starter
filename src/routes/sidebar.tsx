import { createFileRoute } from "@tanstack/react-router";
import { SidebarDemo } from "~/components/sidebar-demo/SidebarDemo";

export const Route = createFileRoute("/sidebar")({
	component: RouteComponent,
});

function RouteComponent() {
	return <SidebarDemo/>;
}
