import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const DynamicRouting = () => {
    const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols/DynamicRouting.md';

    return (
        <>
            <Header text="Dynamic Routing" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default DynamicRouting;
