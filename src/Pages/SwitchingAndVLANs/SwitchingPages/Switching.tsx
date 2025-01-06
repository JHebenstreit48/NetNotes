import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const SwitchingBasics = () => {
    const markdownFilePath = '/CoreNetworkingTopics/SwitchingVLANs.md';

    return (
        <>
            <Header text="Switching Basics" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default SwitchingBasics;
