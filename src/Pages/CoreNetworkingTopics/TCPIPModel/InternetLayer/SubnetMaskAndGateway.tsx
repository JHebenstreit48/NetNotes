import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

const SubnetMaskAndGateway = () => {
    const markdownFilePath = '/InternetLayer/SubnetMaskandDefaultGateway.md';

    return (
        <>
            <Header text="Subnet Mask and Default Gateway)" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default SubnetMaskAndGateway;
