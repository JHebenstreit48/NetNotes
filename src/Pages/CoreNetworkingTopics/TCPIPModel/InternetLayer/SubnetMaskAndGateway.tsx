import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

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
