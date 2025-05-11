import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/Notes/NotesRender";

const NetworkingIntro = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/Introduction.md';

    return (
        <>
            <Header text="Networking Introduction" size="sm" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default NetworkingIntro;
