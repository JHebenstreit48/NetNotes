import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const TCPvsUDP = () => {
    const markdownFilePath = '/TransportLayer/TCPvsUDP.md';

    return (
        <>
            <Header text="TCP vs. UDP" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default TCPvsUDP;
