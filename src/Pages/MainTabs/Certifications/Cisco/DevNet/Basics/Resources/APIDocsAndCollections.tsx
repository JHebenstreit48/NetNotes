import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIDocsAndCollections = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Resources/APIDocsAndCollections';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Docs & Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIDocsAndCollections;
