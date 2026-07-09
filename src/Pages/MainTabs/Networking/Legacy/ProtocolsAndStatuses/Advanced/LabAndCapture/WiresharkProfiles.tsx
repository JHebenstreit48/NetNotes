import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WiresharkProfiles = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture/WiresharkProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiresharkProfiles;
