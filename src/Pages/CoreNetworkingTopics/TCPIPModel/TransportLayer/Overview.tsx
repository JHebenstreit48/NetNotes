import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const TransportLayerOverview = () => {
    const markdownFilePath = '/TransportLayer/Overview.md';

    return (
        <>
            <Header text="Transport Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default TransportLayerOverview;
