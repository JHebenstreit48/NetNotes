import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

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
