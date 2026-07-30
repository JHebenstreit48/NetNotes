import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const EthernetSpeedHistory = () => {
  const markdownFilePath = 'Networking/Switching/Basics/HardwareAndPortHistory/EthernetSpeedHistory';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - Ethernet Speed History" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EthernetSpeedHistory;