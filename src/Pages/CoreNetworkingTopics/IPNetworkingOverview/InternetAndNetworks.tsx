import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
