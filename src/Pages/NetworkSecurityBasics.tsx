import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const NetworkSecurity = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkSecurityBasics.md';

    return (
        <>
            <Header text="Network Security Basics" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default NetworkSecurity;
