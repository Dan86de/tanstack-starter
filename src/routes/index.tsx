import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="mx-auto flex h-screen max-w-lg flex-col items-start justify-center gap-8">
			<h1 className="text-center font-bold text-2xl">
				Every Layout Components Implementation in Tailwind CSS V4
			</h1>
			<ol className="stack-v-0 list-inside list-decimal text-lg">
				<li>
					<Link to="/stack" className="hover:underline">
						Stack
					</Link>
				</li>
				<li>
					<Link to="/box" className="hover:underline">
						Box
					</Link>
				</li>
				<li>
					<Link to="/center" className="hover:underline">
						Center
					</Link>
				</li>
				<li>
					<Link to="/cluster" className="hover:underline">
						Cluster
					</Link>
				</li>
				<li>
					<Link to="/sidebar" className="hover:underline">
					Sidebar
					</Link>
				</li>
				<li>
					<Link to="/switcher" className="hover:underline">
					Switcher
					</Link>
				</li>
			</ol>
		</div>
	);
}
