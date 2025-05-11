import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/Notes/NotesRender";

const Internet = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/Internet.md';

    return (
        <>
            <Header text="Internet and Networks" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Internet;
