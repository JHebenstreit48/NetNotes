import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const NetworkAccessOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/NetworkAcessLayer/NetworkAccessLayerOverview.md';

    return (
        <>
            <Header text="Network Acess Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default NetworkAccessOverview;
