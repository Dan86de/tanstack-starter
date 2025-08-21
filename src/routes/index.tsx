import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="mx-auto flex h-screen max-w-lg items-center justify-center">
			<h1 className="font-bold text-2xl">
				Every Layout Components Implementation in Tailwind CSS V4
			</h1>
		</div>
	);
}
