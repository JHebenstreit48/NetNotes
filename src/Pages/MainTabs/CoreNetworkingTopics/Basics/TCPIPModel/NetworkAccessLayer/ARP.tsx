import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

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
