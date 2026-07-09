import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIDocsAndCollections = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Resources/APIDocsAndCollections';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Docs & Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIDocsAndCollections;
