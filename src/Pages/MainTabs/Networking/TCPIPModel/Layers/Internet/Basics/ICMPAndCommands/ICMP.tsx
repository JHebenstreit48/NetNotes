import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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