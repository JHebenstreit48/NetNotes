import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";

const Firewalls = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkSecurity/Firewalls.md';

    return (
        <>
            <Header text="Firewalls" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Firewalls;
