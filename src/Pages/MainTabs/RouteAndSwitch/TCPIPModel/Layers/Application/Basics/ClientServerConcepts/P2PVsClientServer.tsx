import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const P2PVsClientServer = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerConcepts/P2PVsClientServer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="P2P vs. Client/Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default P2PVsClientServer;
