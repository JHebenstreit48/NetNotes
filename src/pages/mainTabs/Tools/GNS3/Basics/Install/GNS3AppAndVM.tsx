import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const GNS3AppAndVM = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/Install/GNS3AppAndVM';

  return (
    <>
      <PageLayout>
        <PageTitle title="GNS3 App & VM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GNS3AppAndVM;
