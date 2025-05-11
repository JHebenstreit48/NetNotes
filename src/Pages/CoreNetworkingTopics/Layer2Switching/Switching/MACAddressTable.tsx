import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const MACAddressTable = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/MACAddressTable.md';

    return (
        <>
            <Header text="MAC Address Table" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default MACAddressTable;
