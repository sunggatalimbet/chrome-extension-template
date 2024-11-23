import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle, Copy, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function PromptDialog({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const [subject, setSubject] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [generatedPrompt, setGeneratedPrompt] = useState("");
	const [showCopiedAlert, setShowCopiedAlert] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			const prompt = `I want you to act as an ${subject} for Turkish speaking people. I will write you sentences and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentence but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write explanations on replies. My first sentence is "how the weather is in Istanbul?"`;
			setGeneratedPrompt(prompt);
			setIsLoading(false);
		}, 1000);
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(generatedPrompt);
		setShowCopiedAlert(true);
		setTimeout(() => setShowCopiedAlert(false), 3000);
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create AwesomePrompt</DialogTitle>
					<DialogDescription>
						Enter a subject or person to generate a custom prompt.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="subject">Subject/Person</Label>
						<Input
							id="subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							placeholder="e.g., English Pronunciation Helper"
						/>
					</div>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Creating...
							</>
						) : (
							"Create Custom Prompt"
						)}
					</Button>
				</form>
				{generatedPrompt && (
					<div className="mt-4 space-y-2">
						<div className="p-4 bg-accent rounded-md relative">
							<p className="pr-8">{generatedPrompt}</p>
							<Button
								variant="ghost"
								size="icon"
								className="absolute top-2 right-2"
								onClick={handleCopyToClipboard}
							>
								{showCopiedAlert ? (
									<CheckCircle className="h-4 w-4" />
								) : (
									<Copy className="h-4 w-4" />
								)}
							</Button>
						</div>
						{showCopiedAlert && (
							<Alert>
								<CheckCircle className="h-4 w-4" />
								<AlertDescription>
									Prompt copied to clipboard!
								</AlertDescription>
							</Alert>
						)}
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
