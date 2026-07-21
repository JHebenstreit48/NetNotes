import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
