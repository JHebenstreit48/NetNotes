import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const L2ConceptsAndArchitecture = () => {
  const markdownFilePath = 'Glossary/Networking/Switching/ConceptsAndArchitecture';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - L2 Concepts & Architecture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default L2ConceptsAndArchitecture;