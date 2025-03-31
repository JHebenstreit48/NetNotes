import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const VLANOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/VLAN/Overview.md';

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
