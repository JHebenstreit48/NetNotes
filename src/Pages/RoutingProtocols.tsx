import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const RoutingProtocols = () => {
    const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols.md';

    return (
        <>
            <Header text="Routing Protocols" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RoutingProtocols;
