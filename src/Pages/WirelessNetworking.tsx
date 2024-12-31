import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const WirelessNetworking = () => {
    const markdownFilePath = '/CoreNetworkingTopics/WirelessNetworking.md';

    return (
        <>
            <Header text="Wireless Networking" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default WirelessNetworking;
