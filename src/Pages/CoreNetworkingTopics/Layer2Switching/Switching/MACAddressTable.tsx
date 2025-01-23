import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const MACAddressTable = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2SwitchingBasics/MACAddressTable.md';

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
