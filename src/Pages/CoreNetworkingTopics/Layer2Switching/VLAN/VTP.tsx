import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const VTP = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/VLAN/VTP.md';

    return (
        <>
            <Header text="VLAN Trunking Protocol" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default VTP;
