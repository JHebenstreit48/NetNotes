import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/Notes/NotesRender";

const ApplicationLayerOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/Overview.md';

    return (
        <>
            <Header text="Application Layer Overview" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ApplicationLayerOverview;
