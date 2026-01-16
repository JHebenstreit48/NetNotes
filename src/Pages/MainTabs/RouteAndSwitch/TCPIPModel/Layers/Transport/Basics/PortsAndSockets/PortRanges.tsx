import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PortRanges = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortRanges';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Port Ranges" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortRanges;
