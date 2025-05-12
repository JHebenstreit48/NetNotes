import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const HTTPHTTPS = () => {
    const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/HTTPHTTPS.md';

    return (
        <>
            <Header text="HTTP/HTTPS" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default HTTPHTTPS;
