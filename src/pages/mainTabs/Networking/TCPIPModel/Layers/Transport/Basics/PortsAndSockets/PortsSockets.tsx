import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PortsSockets = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortsAndSockets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ports/Sockets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortsSockets;
