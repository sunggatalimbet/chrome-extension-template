import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function PromptForm({
	onSubmit,
}: {
	onSubmit: (subject: string) => void;
}) {
	const [subject, setSubject] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(subject);
	};

	return (
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
			<Button type="submit">Create Custom Prompt</Button>
		</form>
	);
}
