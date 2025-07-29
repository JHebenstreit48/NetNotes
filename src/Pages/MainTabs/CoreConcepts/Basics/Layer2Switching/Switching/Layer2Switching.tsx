import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Layer2Switching = () => {
  const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Layer2Switching';

  return (
    <>
      <PageLayout>
        <Header text="Layer 2 Switching Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layer2Switching;
