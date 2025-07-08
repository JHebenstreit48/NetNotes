import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const SwitchingOverview = () => {
  const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Switching Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SwitchingOverview;
