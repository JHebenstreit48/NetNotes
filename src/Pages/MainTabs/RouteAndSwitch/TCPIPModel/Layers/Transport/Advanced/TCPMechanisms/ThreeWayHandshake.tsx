import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThreeWayHandshake = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/ThreeWayHandshake';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Three-Way Handshake" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreeWayHandshake;
