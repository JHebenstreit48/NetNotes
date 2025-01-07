import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const ApplicationLayerOverview = () => {
    const markdownFilePath = '/ApplicationLayer/Overview.md';

    return (
        <>
            <Header text="Application Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ApplicationLayerOverview;
