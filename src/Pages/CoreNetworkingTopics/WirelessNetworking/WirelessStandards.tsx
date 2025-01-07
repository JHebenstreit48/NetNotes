import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

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
