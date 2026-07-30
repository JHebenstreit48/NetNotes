import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ICMP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndCommands/ICMP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - ICMP & Commands - ICMP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ICMP;