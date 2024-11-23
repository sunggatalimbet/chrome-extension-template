import { useState } from "react";
import { PromptCard } from "../entities/prompt-card";
import { PromptDialog } from "../entities/prompt-dialog";

export const PromptGenerator = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleCardClick = () => {
		setIsDialogOpen(true);
	};

	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};

	return (
		<div className="space-y-4">
			<PromptCard onClick={handleCardClick} />
			<PromptDialog
				isOpen={isDialogOpen}
				onClose={handleDialogClose}
			/>
		</div>
	);
};
