import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const Layer2Switching = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2Switching.md';

    return (
        <>
            <Header text="Layer 2 Switching Basics" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Layer2Switching;
