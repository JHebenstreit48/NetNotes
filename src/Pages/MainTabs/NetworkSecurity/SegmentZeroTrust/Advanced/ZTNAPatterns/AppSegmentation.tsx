import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
