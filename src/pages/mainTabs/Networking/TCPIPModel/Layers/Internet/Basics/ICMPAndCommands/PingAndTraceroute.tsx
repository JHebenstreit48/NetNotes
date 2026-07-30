import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PingAndTraceroute = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndCommands/PingAndTraceroute';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ping & Traceroute" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PingAndTraceroute;
