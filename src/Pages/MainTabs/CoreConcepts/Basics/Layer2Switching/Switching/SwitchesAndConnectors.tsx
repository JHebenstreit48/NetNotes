import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const SwitchesAndConnectors = () => {
  const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/SwitchesAndConnectors';

  return (
    <>
      <PageLayout>
        <Header text="Switches/Connectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SwitchesAndConnectors;
