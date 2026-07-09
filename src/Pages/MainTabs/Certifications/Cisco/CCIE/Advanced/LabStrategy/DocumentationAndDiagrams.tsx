import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
