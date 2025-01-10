import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const DataLinkLayerOverview = () => {
    const markdownFilePath = '/DataLinkLayer/Overview.md';

    return (
        <>
            <Header text="Data Link Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default DataLinkLayerOverview;
