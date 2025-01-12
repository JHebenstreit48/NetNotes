import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const IPNetworkingOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/IPNetworkingOverview/Overview.md';

    return (
        <>
            <Header text="IP Networking Overview" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default IPNetworkingOverview;
