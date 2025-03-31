import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

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
