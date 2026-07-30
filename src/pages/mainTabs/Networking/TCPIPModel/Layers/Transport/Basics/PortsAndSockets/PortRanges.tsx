import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
