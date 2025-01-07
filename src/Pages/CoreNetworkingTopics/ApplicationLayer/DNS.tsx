import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const DNS = () => {
    const markdownFilePath = '/ApplicationLayer/DNS.md';

    return (
        <>
            <Header text="DNS" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default DNS;
