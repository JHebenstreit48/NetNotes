import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";

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
