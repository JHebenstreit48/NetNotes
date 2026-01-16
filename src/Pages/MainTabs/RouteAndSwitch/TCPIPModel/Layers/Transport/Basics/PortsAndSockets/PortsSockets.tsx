import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PortsSockets = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortsSockets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ports/Sockets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortsSockets;
