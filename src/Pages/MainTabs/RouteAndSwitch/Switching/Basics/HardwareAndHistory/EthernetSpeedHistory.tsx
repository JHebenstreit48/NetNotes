import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EthernetSpeedHistory = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Basics/HardwareAndHistory/EthernetSpeedHistory';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - Ethernet Speed History" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EthernetSpeedHistory;