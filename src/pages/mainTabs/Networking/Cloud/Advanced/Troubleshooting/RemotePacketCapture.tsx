import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
