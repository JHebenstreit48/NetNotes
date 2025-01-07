import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const StaticRouting = () => {
    const markdownFilePath = '/RoutingProtocols/StaticRouting.md';

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

export default StaticRouting;
