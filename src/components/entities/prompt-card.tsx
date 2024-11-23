import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

export const PromptCard = ({ onClick }: { onClick: () => void }) => {
	return (
		<Card className="cursor-pointer hover:bg-accent" onClick={onClick}>
			<CardHeader>
				<CardTitle>AwesomePrompt</CardTitle>
				<CardDescription>
					Collection of high-quality, community-driven ChatGPT prompts
					designed to optimize AI interactions.
				</CardDescription>
			</CardHeader>
		</Card>
	);
};
