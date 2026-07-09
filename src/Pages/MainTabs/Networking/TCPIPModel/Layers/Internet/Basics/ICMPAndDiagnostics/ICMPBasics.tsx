import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ICMPBasics = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics/ICMPBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="ICMP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ICMPBasics;
