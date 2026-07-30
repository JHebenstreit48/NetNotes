import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Ipconfig = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndCommands/Ipconfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - ICMP & Commands - Ipconfig" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Ipconfig;