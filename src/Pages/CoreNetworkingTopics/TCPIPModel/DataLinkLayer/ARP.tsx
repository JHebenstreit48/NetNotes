import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const ARP = () => {
    const markdownFilePath = '/DataLinkLayer/ARP.md';

    return (
        <>
            <Header text="ARP" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ARP;
