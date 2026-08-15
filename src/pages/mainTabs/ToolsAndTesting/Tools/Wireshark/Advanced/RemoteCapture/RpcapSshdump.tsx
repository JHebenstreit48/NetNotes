import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
