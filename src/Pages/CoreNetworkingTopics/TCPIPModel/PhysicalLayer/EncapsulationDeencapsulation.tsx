import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

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
