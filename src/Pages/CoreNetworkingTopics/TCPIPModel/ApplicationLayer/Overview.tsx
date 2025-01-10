import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const ApplicationLayerOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/Overview.md';

    return (
        <>
            <Header text="Application Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ApplicationLayerOverview;
