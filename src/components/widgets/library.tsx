import { PromptGenerator } from "../features/generate-prompt";

export const Library = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Fast Prompt</h1>
			<PromptGenerator />
		</div>
	);
};
