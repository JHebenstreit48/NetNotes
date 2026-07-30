import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
