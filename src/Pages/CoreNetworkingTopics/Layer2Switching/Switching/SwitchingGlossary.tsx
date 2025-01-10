import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";
import { useNavigate } from "react-router-dom";
import "@/CSS/GlossaryBack.css"

const SwitchingGlossary = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2SwitchingBasics/SwitchingGlossary.md';
    const navigate = useNavigate();

    return (
        <>
            <Header text="Switching Glossary" />
            <div>
                <button
                    className="glossaryBack"
                    onClick={() => navigate(-1)}>
                    ← Back to Previous
                </button>
            </div>

            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default SwitchingGlossary;
