import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import { useNavigate } from 'react-router-dom';
import '@/SCSS/PageStyles/GlossaryBack.scss';

const SwitchingGlossary = () => {
  const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/SwitchingGlossary';
  const navigate = useNavigate();

  return (
    <>
      <PageLayout>
        <Header text="Switching Glossary" />
        <div>
          <button
            className="glossaryBack"
            onClick={() => navigate(-1)}
          >
            ← Back to Previous
          </button>
        </div>

        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default SwitchingGlossary;
