import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const StandardACLs = () => {
    const markdownFilePath = '/CoreNetworkingTopics/ACLs.md';

    return (
        <>
            <Header text="Access Control Lists (ACLs)" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default StandardACLs;
