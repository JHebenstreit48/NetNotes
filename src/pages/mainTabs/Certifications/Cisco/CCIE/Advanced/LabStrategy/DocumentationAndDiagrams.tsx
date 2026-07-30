import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DocumentationAndDiagrams = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/LabStrategy/DocumentationAndDiagrams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Documentation & Diagrams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DocumentationAndDiagrams;
