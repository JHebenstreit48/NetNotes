import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
