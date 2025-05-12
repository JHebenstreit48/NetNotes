import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/PageComponents/Notes/NotesRender";

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
