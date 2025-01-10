import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

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
