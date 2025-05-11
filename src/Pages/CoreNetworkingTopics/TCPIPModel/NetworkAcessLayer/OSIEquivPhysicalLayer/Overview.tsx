import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const PhysicalLayerOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/Overview.md';

    return (
        <>
            <Header text="Physical Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default PhysicalLayerOverview;
