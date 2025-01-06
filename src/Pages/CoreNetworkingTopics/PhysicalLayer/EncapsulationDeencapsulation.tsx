import "@/CSS/Header.css";
import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

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
