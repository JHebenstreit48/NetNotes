import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const LocalNetworks = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/LocalNetworks.md';

    return (
        <>
            <Header text="Local Networks" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default LocalNetworks;
