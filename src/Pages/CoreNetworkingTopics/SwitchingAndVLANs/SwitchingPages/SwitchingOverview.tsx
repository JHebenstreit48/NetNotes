import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const SwitchingOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/SwitchingVLANs.md';

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
