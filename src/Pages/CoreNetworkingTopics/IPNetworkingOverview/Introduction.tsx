import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const NetworkingIntro = () => {
    const markdownFilePath = '/CoreNetworkingTopics/IPNetworkingOverview/Introduction.md';

    return (
        <>
            <Header text="Networking Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default NetworkingIntro;
