import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
