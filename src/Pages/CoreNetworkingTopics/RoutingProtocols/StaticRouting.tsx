import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

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
