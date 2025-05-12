import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const Wireshark = () => {
    const markdownFilePath = '/NetworkingTools/Wireshark.md';

    return (
        <>
            <Header text="Wireshark" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Wireshark;
