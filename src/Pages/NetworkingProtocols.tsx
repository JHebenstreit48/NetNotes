import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const NetworkingProtocols = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkingProtocols.md';

    return (
        <>
            <Header text="Networking Protocols" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default NetworkingProtocols;
