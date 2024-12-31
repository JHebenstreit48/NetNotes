import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const IPNetworkingOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/IPNetworkingOverview.md';

    return (
        <>
            <Header text="IP Networking Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default IPNetworkingOverview;
