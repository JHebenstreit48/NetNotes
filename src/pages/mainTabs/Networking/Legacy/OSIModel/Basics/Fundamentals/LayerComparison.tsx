import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LayerComparison = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Fundamentals/LayerComparison';

  return (
    <>
      <PageLayout>
        <PageTitle title="OSI Model - Fundamentals - Layer Comparison" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayerComparison;