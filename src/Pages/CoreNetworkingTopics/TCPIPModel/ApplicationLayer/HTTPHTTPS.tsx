import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const HTTPHTTPS = () => {
    const markdownFilePath = '/ApplicationLayer/HTTPHTTPS.md';

    return (
        <>
            <Header text="HTTP/HTTPS" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default HTTPHTTPS;
