import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
