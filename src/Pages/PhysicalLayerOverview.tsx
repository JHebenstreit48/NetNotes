import "@/CSS/Header.css";
import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const PhysicalLayerOverview = () => {
    const markdownFilePath = '/PhysicalLayer/PhysicalLayerOverview.md';

    return (
        <>
            <Header text="Physical Layer Overview" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default PhysicalLayerOverview;
