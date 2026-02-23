import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const L2ConceptsAndArchitecture = () => {
  const markdownFilePath = 'Glossary/Networking/Switching/ConceptsAndArchitecture';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - L2 Concepts & Architecture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default L2ConceptsAndArchitecture;