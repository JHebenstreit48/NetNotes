import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Throughput = () => {
  const markdownFilePath = '/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Throughput';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Physical - Throughput" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Throughput;