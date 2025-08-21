import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="max-w-lg mx-auto flex items-center justify-center h-screen">
			<h1 className="text-2xl font-bold">
				Every Layout Components Implementation in Tailwind CSS V4
			</h1>
		</div>
	);
}
