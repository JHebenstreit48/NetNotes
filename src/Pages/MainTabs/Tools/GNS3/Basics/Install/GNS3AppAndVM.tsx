import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GNS3AppAndVM = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/Install/GNS3AppAndVM';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GNS3 App & VM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GNS3AppAndVM;
