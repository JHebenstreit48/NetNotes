import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
