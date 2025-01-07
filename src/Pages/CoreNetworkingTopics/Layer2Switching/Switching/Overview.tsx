import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const SwitchingOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Overview.md';

    return (
        <>
            <Header text="Switching Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default SwitchingOverview;
