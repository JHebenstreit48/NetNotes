import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

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
