import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const RoutingComparisons = () => {
    const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols/RoutingComparisons.md';

    return (
        <>
            <Header text="Routing Comparisons" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RoutingComparisons;
