import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
