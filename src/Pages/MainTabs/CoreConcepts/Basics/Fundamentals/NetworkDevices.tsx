import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const NetworkDevices = () => {
  const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/NetworkDevices';

  return (
    <>
      <PageLayout>
        <Header text="Networking Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkDevices;
