import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AppSegmentation = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Advanced/ZTNAPatterns/AppSegmentation';

  return (
    <>
      <PageLayout>
        <PageTitle title="App Segmentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppSegmentation;
