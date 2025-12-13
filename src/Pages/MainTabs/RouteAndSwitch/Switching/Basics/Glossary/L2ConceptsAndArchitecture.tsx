import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';
// import { useNavigate } from 'react-router-dom';
// import '@/SCSS/PageStyles/GlossaryBack.scss';

const L2ConceptsAndArchitecture = () => {
  const markdownFilePath =
    'RouteAndSwitch/Switching/Basics/Glossary/L2ConceptsAndArchitecture';

  // const navigate = useNavigate();

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - L2 Concepts & Architecture" />

        {/*
        <div>
          <button
            className="glossaryBack"
            onClick={() => navigate(-1)}
          >
            ← Back to Previous
          </button>
        </div>
        */}

        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default L2ConceptsAndArchitecture;