import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const Layer2Switching = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2SwitchingBasics/Layer2Switching.md';

    return (
        <>
            <Header text="Layer 2 Switching Basics" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Layer2Switching;
