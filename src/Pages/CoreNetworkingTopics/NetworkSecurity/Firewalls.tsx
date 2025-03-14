import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

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
