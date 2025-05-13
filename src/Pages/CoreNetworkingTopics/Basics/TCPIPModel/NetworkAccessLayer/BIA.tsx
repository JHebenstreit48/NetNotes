import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const BIA = () => {
    const markdownFilePath = '/DataLinkLayer/BIA.md';

    return (
        <>
            <Header text="Burned-In Address" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default BIA;
