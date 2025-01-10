import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const SwitchingOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2SwitchingBasics/Overview.md';

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
