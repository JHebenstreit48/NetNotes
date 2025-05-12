import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const InterVLANRouting = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/VLAN/InterVLANRouting.md';

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

export default InterVLANRouting;
