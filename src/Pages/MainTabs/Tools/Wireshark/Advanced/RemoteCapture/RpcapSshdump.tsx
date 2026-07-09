import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RpcapSshdump = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/RemoteCapture/RpcapSshdump';

  return (
    <>
      <PageLayout>
        <PageTitle title="rpcap/sshdump" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RpcapSshdump;
