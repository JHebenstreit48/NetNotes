import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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