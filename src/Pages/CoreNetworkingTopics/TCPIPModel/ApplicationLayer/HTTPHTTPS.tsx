import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

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
