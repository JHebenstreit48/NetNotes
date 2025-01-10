import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const EthernetSpeedsHistory = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2SwitchingBasics/EthernetSpeedsHistory.md';

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
