import Header from "@/Components/PageComponents/Header";
import PageSetup from "@/Components/Notes/NotesRender";
import { useNavigate } from "react-router-dom";
import "@/SCSS/SharedStyles/GlossaryBack.scss";

const SwitchingGlossary = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/SwitchingGlossary.md';
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
