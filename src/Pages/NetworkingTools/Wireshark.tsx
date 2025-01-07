import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const Wireshark = () => {
    const markdownFilePath = '/NetworkingTools/Wireshark.md';

    return (
        <>
            <Header text="Wireshark" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Wireshark;
