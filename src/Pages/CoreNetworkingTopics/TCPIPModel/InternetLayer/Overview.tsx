import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const InternetLayerOverview = () => {
    const markdownFilePath = '/InternetLayer/Overview.md';

    return (
        <>
            <Header text="Internet Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default InternetLayerOverview;
