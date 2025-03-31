import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const SwitchesAndConnectors = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/SwitchesAndConnectors.md';

    return (
        <>
            <Header text="Switches and Connectors" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default SwitchesAndConnectors;
