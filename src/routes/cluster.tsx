import { createFileRoute } from "@tanstack/react-router";
import { ClusterDemo } from "~/components/cluster-demo/ClusterDemo";

export const Route = createFileRoute("/cluster")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
	  <ClusterDemo />
	);
}
