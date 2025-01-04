import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const SwitchingVLANs = () => {
    const markdownFilePath = '/CoreNetworkingTopics/SwitchingVLANs.md';

    return (
        <>
            <Header text="Switching and VLANs" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default SwitchingVLANs;
