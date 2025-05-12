import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const EncapsulationDeencapsulation = () => {
    const markdownFilePath = '/PhysicalLayer/EncapsulationDeencapsulation.md';

    return (
        <>
            <Header text="Encapsualtion and De-encapsulation" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default EncapsulationDeencapsulation;
