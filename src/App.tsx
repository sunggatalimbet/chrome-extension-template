import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Library } from "./components/widgets/library";

function App() {
	return (
		<Tabs defaultValue="account" className="w-full">
			<TabsList className="flex flex-row justify-between w-full">
				<TabsTrigger value="home" className="w-1/5">
					Home
				</TabsTrigger>
				<TabsTrigger value="library" className="w-1/5">
					Library
				</TabsTrigger>
				<TabsTrigger value="text-to-prompt" className="w-1/5">
					Text to Prompt
				</TabsTrigger>
				<TabsTrigger value="saved" className="w-1/5">
					Saved
				</TabsTrigger>
				<TabsTrigger value="customization" className="w-1/5">
					Customization
				</TabsTrigger>
			</TabsList>
			<TabsContent value="home">home page.</TabsContent>
			<TabsContent value="library">
				<Library />
			</TabsContent>
			<TabsContent value="text-to-prompt">
				text-to-prompt page.
			</TabsContent>
			<TabsContent value="saved">saved page.</TabsContent>
			<TabsContent value="customization">customization page.</TabsContent>
		</Tabs>
	);
}

export default App;
