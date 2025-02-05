import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

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
