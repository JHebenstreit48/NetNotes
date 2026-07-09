import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PortRanges = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortRanges';

  return (
    <>
      <PageLayout>
        <PageTitle title="Port Ranges" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortRanges;
