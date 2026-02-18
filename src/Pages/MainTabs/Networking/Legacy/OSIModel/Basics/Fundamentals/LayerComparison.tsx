import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LayerComparison = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Overview/LayerComparison';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OSI Model - Layers Comparison" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayerComparison;