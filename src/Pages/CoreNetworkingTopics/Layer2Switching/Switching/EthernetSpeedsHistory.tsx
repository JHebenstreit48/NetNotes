import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const EthernetSpeedsHistory = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/EthernetSpeedsHistory.md';

    return (
        <>
            <Header text="History of Ethernet Speeds" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default EthernetSpeedsHistory;
