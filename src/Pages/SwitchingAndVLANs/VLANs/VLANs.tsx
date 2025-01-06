import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const VLANBasics = () => {
    const markdownFilePath = '/CoreNetworkingTopics/SwitchingVLANs.md';

    return (
        <>
            <Header text="VLAN Basics" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default VLANBasics;
