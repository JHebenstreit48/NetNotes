import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const DataRepresentation = () => {
    const markdownFilePath = '/PhysicalLayer/DataRepresentation.md';

    return (
        <>
            <Header text="Data Representation" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default DataRepresentation;
