import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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