import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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