import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const IPV4vsIPV6 = () => {
    const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/InternetLayer/IPv4vsIPv6.md';

    return (
        <>
            <Header text="IPv4 vs IPv6" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default IPV4vsIPV6;
