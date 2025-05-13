import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

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
