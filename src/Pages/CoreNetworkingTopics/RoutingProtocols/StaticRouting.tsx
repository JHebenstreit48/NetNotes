import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const StaticRouting = () => {
    const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols/StaticRouting.md';

    return (
        <>
            <Header text="Static Routing" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default StaticRouting;
