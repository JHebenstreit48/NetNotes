import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const StandardsOfCommunication = () => {
    const markdownFilePath = '/PhysicalLayer/StandardsOfCommunication.md';

    return (
        <>
            <Header text="Standards of Communication" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default StandardsOfCommunication;
