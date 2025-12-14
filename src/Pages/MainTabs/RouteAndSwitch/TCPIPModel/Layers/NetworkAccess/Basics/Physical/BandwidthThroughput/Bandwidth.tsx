import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Bandwidth = () => {
  const markdownFilePath =
    '/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical-1/BandwidthThroughput/Bandwidth';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Bandwidth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Bandwidth;