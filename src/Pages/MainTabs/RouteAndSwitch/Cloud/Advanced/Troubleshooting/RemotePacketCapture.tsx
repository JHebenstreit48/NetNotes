import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RemotePacketCapture = () => {
  const markdownFilePath = 'RouteAndSwitch/Cloud/Advanced/Troubleshooting/RemotePacketCapture';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Remote Packet Capture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RemotePacketCapture;
