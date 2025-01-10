import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

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
