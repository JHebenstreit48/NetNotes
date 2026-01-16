import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PingAndTraceroute = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics/PingAndTraceroute';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ping & Traceroute" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PingAndTraceroute;
