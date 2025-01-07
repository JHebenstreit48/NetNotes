import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const Layer2Switching = () => {
    const markdownFilePath = '/.md';

    return (
        <>
            <Header text="Layer2Switching" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Layer2Switching;
