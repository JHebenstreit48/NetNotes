import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const WirelessStandards = () => {
    const markdownFilePath = '/CoreNetworkingTopics/WirelessNetworking.md';

    return (
        <>
            <Header text="Wireless Networking" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default WirelessStandards;
