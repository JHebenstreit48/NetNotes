import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
