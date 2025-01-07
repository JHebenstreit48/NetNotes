import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const VLANOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/SwitchingVLANs/Overview.md';

    return (
        <>
            <Header text="VLAN Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default VLANOverview;
