import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

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
