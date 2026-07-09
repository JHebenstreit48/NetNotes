import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RemotePacketCapture = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/Troubleshooting/RemotePacketCapture';

  return (
    <>
      <PageLayout>
        <PageTitle title="Remote Packet Capture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RemotePacketCapture;
