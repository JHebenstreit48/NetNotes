import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

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
